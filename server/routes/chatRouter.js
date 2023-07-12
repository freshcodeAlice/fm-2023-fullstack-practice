const express = require('express');
const ChatController = require('../controllers/Chat.controller');
const chatRouter = express.Router();
const {checkToken} = require('../middlewares/checkToken');
const upload = require('../multer');

chatRouter.post('/', checkToken, upload.single('image'), ChatController.createChat);
chatRouter.post('/:chatId', checkToken, ChatController.addMessage);
chatRouter.get('/:chatId/users', checkToken, ChatController.getChatWithUsers);
chatRouter.get('/all', checkToken, ChatController.getAllUserChats);
chatRouter.get('/:chatId', checkToken, ChatController.getChatWithMessages);
chatRouter.put('/:chatId', checkToken, ChatController.addUserToChat);



module.exports = chatRouter;