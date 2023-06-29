const express = require('express');
const ChatController = require('../controllers/Chat.controller');
const chatRouter = express.Router();


chatRouter.post('/', ChatController.createChat);
chatRouter.post('/:chatId', ChatController.addMessage);
chatRouter.get('/:chatId', ChatController.getChatWithUsers);
chatRouter.get('/:userId/all', ChatController.getAllUserChats);
chatRouter.put('/:chatId/:userId', ChatController.addUserToChat);



module.exports = chatRouter;