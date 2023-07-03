class TokenError extends Error {
    constructor(message) {
        super(message);
        this.message = message || 'Need token';
    }
    
}


module.exports = TokenError;