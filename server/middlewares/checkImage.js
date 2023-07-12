module.exports.checkImage = async (req, res, next) => {
    try {
        const {file} = req;
        if(file) {
            const HOST = process.env.NODE_HOST || 'http://localhost';
            const PORT = process.env.PORT || 5000;
            req.body.imagePath = `${HOST}:${PORT}/api/${file.filename}`;
        }
        next();
    } catch(error) {
        next(error);
    }
}