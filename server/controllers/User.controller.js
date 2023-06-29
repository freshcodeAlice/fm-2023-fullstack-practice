const {User} = require('../models');

module.exports.signUp = async(req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send({data: createdUser});
    } catch(error) {
        next(error)
    }
} 

/*
1. Прийняти інформацію
2. Знайти юзера за допомогою інфи, яка прийшла разом з юзером (за мейлом)
3. Порівняти паролі (хеши паролів)
4. Якщо все окей - створити нову сесію і відправити юзеру "підтвердження" логіна



*/

module.exports.signIn = async(req, res, next) => {}

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