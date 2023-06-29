const mongoose = require('mongoose');

const db = process.env.NODE_ENV || "development";
const CONFIG = require('../configs/db.json')[db];

const User = require('./User');
const Chat = require('./Chat');
const Message = require('./Message');

mongoose
.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
.catch(error => {
    console.log(error);
    process.exit(1);
})

module.exports = {
    User, Chat, Message
};