const express = require('express');
const ChatController = require('../controllers/Chat.controller');
const chatRouter = express.Router();


chatRouter.post('/', ChatController.createChat);
chatRouter.post('/:chatId', ChatController.addMessage);
chatRouter.get('/:chatId/users', ChatController.getChatWithUsers);
chatRouter.get('/:userId/all', ChatController.getAllUserChats);
chatRouter.get('/:chatId', ChatController.getChatWithMessages);
chatRouter.put('/:chatId/:userId', ChatController.addUserToChat);



module.exports = chatRouter;