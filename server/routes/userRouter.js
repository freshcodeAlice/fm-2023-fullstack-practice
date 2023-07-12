const express = require('express');
const userRouter =  express.Router();
const {hashPass} = require('../middlewares/hashPass');
const UserController = require('../controllers/User.controller');
const {checkToken} = require('../middlewares/checkToken');
const {checkImage} = require('../middlewares/checkImage');
const upload = require('../multer');


userRouter.post('/sign-up', upload.single('image'), checkImage, hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn
userRouter.get('/', checkToken, UserController.getOne);
userRouter.delete('/', checkToken, UserController.deleteOne);
userRouter.put('/', checkToken, upload.single('image'), checkImage, UserController.updateOne);
//// TODO: tokens

module.exports = userRouter;