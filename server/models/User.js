const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    birthday: Date,
    imagePath:  String
});


const User = mongoose.model('User', userSchema);

module.exports = User;