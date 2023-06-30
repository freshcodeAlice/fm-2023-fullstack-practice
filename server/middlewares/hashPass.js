const bcrypt = require('bcrypt');
const CryptError = require('../errors/CryptError');

const SALT_ROUND = 1;

module.exports.hashPass = async (req, res, next) => {

    try {
        const {body: {password}} = req;
        req.body.passwordHash = await bcrypt.hash(password, SALT_ROUND);
        next();
    } catch(error) {
        next(new CryptError(error.message))
    }
}