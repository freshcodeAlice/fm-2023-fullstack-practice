const express = require('express');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');

const apiRouter = express.Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/chats', chatRouter);
apiRouter.use(express.static('public'));


module.exports = apiRouter;