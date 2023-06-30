class CryptError extends Error {
    constructor(message) {
        super(message);
        this.message = 'No data';
    }
    
}


module.exports = CryptError;