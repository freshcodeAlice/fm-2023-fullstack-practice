const {Error: {ValidationError, CastError}} = require('mongoose');
const CryptError = require('./errors/CryptError');
const NotFoundError = require('./errors/NotFoundError');
const TokenError = require('./errors/TokenError');
const InvalidDataError = require('./errors/InvalidDataError');
const {TokenExpiredError, JsonWebTokenError} = require('jsonwebtoken');

module.exports.errorHandling = async (err, req, res, next) => {
    console.log(err);
    if (err instanceof CryptError || err instanceof ValidationError || err instanceof InvalidDataError) {
        return res.status(400).send({error: err.message})
    }

    if(err instanceof NotFoundError) {
        return res.status(404).send({error: err.message});
    }

    if(err instanceof TokenError) {
        return res.status(401).send({error: err.message});
    }


    if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError){
        return res.status(403).send({error: err.message});
    }


    return res.status(500).send({error: err.message || 'Something goes wrong'});
}