const {User} = require('../models');
const NotFoundError = require('../errors/NotFoundError');
const InvalidDataError = require('../errors/InvalidDataError');
const {createToken, verifyToken} = require('../services/tokenService');
const bcrypt = require('bcrypt');

module.exports.signUp = async(req, res, next) => {
    try {
       const {body} = req;
        const createdUser = await User.create(body);
        const token = await createToken({email, userId: createdUser._id});
        const readyUser = Object.assign({}, createdUser._doc);
        delete readyUser.passwordHash;
        res.status(201).send({
            data: readyUser,
            token});
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
        const token = await createToken({email, userId: foundUser._id});
        const readyUser = Object.assign({}, foundUser._doc);
        delete readyUser.passwordHash;
        res.status(200).send({
            data: readyUser,
            token})

    } catch(error) {
        next(error)
    }
}

module.exports.getOne = async(req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundUser = await User.findById(id);
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


