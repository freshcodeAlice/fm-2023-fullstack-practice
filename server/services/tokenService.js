const {promisify} = require('node:util');
const jwt = require('jsonwebtoken');

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const SECRET_VALUE = 'super-secret';

const ACCESS_TIME = 3600;


module.exports.createToken = async ({userId, email}) => {
    const token = await promisifyJWTSign({userId, email}, SECRET_VALUE, {
        expiresIn: ACCESS_TIME
    });

    return token
}

module.exports.verifyToken = async (token) => {
    const result = promisifyJWTVerify(token, SECRET_VALUE);
    return result;
}