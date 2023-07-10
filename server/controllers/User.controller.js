const {User, RefreshToken} = require('../models');
const TokenError = require('../errors/TokenError');
const NotFoundError = require('../errors/NotFoundError');
const InvalidDataError = require('../errors/InvalidDataError');
const TokenService = require('../services/tokenService');
const bcrypt = require('bcrypt');

module.exports.signUp = async(req, res, next) => {
    try {
       const {body} = req;
        const createdUser = await User.create(body);
        const tokens = await TokenService.createTokenPair({email, userId: createdUser._id});
        // Зберегти refreshToken до БД
        const added = await RefreshToken.create({
            token: tokens.refreshToken,
            userId: createdUser._id
        });
        const readyUser = Object.assign({}, createdUser._doc);
        delete readyUser.passwordHash;
        res.status(201).send({
            data: readyUser,
            tokens});
    } catch(error) {
        next(error)
    }
} 

/*


3. Порівняти паролі (хеши паролів)
4. Якщо все окей - створити нову сесію і відправити юзеру "підтвердження" логіна

*/

module.exports.signIn = async(req, res, next) => {
    try {
        //1. Прийняти інформацію
        const {body: {email, password}} = req; // email, password
       // 2. Знайти юзера за допомогою інфи, яка прийшла разом з юзером (за мейлом)
        const foundUser = await User.findOne({
            email
        });
        // 2.1 Або юзера з таким імейлом ми знайшли, або ні
        if(!foundUser) {
            throw new NotFoundError('User not found');
        }
        const result = await bcrypt.compare(password, foundUser.passwordHash);
        // або пароль правильний, або ні
        if (!result) {
            throw new InvalidDataError('Invalid credentials');
        }
        /// Створити сесію користувача (створити токени і відправити їх назад для підтвердження аутентифікації)
        const tokens = await TokenService.createTokenPair({email, userId: foundUser._id});
        // Зберегти refreshToken до БД
        const added = await RefreshToken.create({
            token: tokens.refreshToken,
            userId: foundUser._id
        });
        const readyUser = Object.assign({}, foundUser._doc);
        delete readyUser.passwordHash;
        res.status(200).send({
            data: readyUser,
            tokens})

    } catch(error) {
        next(error)
    }
}

module.exports.getOne = async(req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const foundUser = await User.findById(userId);
        if (!foundUser) { 
            throw new NotFoundError('User not found')
        }
        /// Потребує покращення - якщо не знайшли юзера - маємо відповідати 404 помилкою
        res.status(200).send({data: foundUser});
    } catch(error) {
        next(error)
    }
} 

module.exports.deleteOne = async(req, res, next) => {
    try {
        const {params: {id}} = req;
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).send({data: deletedUser});
    } catch(error) {
        next(error)
    }
} 

/*
1. Якщо ми прийшли рефрешити сесію, то ми маємо принести refreshToken
2. Перевіряємо, чи рефрешТокен іще не просрочився
    2.1 Якщо просрочився (або невалідний)- видаємо помилку, яка змушує користувача перелогінитись
    2.2 Якщо токен валідний - ідемо далі
3. Перевіряємо наявність цього токена в базі даних
    3.1 Якщо його там немає - він фейковий, видаємо помилку
    3.2. Якщо він там є - перевіряємо, чи співпадає користувач, дані якого були всередині токена, і той, за яким за яким цей токен закріплений
4. Якщо все пройшло успішно, всі дані співпадають і все круто - ми оновлюємо сесію (створюємо свіжу пару токенів) 
    4.1 Видалити використаний refreshToken з БД
    4.2. Новостворений refreshToken треба додати до БД
і відправляємо їх у відповідь на запит

*/

module.exports.refreshSession = async (req, res, next) => {
    const {body: {refreshToken}} = req;
    let verifyResult;
    try {
        verifyResult = await TokenService.verifyRefreshToken(refreshToken);
    } catch(error) {
        next(new TokenError('Invalid refresh token'))
    }

    try {
        if(verifyResult) {
            const foundUser = await User.findOne({
                email: verifyResult.email
            });
            const rtFromDB = await RefreshToken.findOne({
                $and: [{
                    token: refreshToken
                }, {
                    userId: foundUser._id
                }]
            });

            if(rtFromDB) {
                // Видаляємо з БД
                const removed = await rtFromDB.deleteOne();
                // Робимо нову пару токенів
                // const newAccessToken = await TokenService.createAccessToken({userId: foundUser._id, email: foundUser.email});
                // const newRefreshToken = await TokenService.createRefreshToken({userId: foundUser._id, email: foundUser.email});

                const tokens = await TokenService.createTokenPair({userId: foundUser._id, 
                                                            email: foundUser.email});

                // записуємо новий рефреш-токен до БД
                const add = await RefreshToken.create({
                    token: tokens.refreshToken,
                    userId: foundUser._id
                });

                res.status(200).send({
                   tokens
                })
            } else {
                throw new TokenError('Token not found');
            }
        }
    } catch(error) {
        next(error);
    }

}