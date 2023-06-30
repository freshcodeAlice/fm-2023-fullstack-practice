class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.message = message || 'Not Found';
    }
    
}


module.exports = NotFoundError;