const {User} = require('../models');
const bcrypt = require('bcrypt');

module.exports.signUp = async(req, res, next) => {
    try {
        const userData = {
            ...req.body
        };
        delete userData.password;
        const createdUser = await User.create(userData);
        res.status(201).send({data: createdUser});
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
            throw new Error('User not found');
        }
        const result = await bcrypt.compare(password, foundUser.passwordHash);
        // або пароль правильний, або ні
        res.status(200).send({data: "Success"})

        /// Створити сесію користувача (створити токени і відправити їх назад для підтвердження аутентифікації)

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