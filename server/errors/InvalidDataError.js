class InvalidDataError extends Error {
    constructor(message) {
        super(message);
        this.message =  message || 'Invalid data';
    }
    
}


module.exports = InvalidDataError;