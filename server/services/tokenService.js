const {promisify} = require('node:util');
const jwt = require('jsonwebtoken');

const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);

const ACCESS_SECRET_VALUE = 'super-secret';
const REFRESH_SECRET_VALUE = 'refresh-secret';

const ACCESS_TIME = 60;
const REFRESH_TIME = 60*60;


module.exports.createAccessToken = async ({userId, email}) => {
    const token = await promisifyJWTSign({userId, email}, ACCESS_SECRET_VALUE, {
        expiresIn: ACCESS_TIME
    });

    return token
}

module.exports.verifyAccessToken = async (token) => {
    const result = promisifyJWTVerify(token, ACCESS_SECRET_VALUE);
    return result;
}

module.exports.createRefreshToken = async ({userId, email}) => {
    return await promisifyJWTSign({userId, email}, REFRESH_SECRET_VALUE, {
        expiresIn: REFRESH_TIME
    })
};

module.exports.verifyRefreshToken = async (token) => {
    return await promisifyJWTVerify(token, REFRESH_SECRET_VALUE);
};