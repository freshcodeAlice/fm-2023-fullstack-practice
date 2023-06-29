const express = require('express');

const apiRouter = express.Router();

apiRouter.use('/users/', userRouter);
apiRouter.use('/chats', chatRouter);


module.exports = apiRouter;