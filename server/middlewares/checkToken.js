const {verifyAccessToken} = require('../services/tokenService');
const TokenError = require('../errors/TokenError');

module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        if(!authorization) {
            throw new TokenError('Need authorization')
        }
        const [, token]= authorization.split(' ');
        console.log(token);
        req.payload = await verifyAccessToken(token);
        console.log(req.payload);
       next();
    } catch(error) {
        next(error)
    }
}