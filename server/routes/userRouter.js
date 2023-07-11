const express = require('express');
const userRouter =  express.Router();
const {hashPass} = require('../middlewares/hashPass');
const UserController = require('../controllers/User.controller');
const {checkToken} = require('../middlewares/checkToken');

userRouter.post('/sign-up', hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn
userRouter.get('/', checkToken, UserController.getOne);
userRouter.delete('/', checkToken, UserController.deleteOne);
userRouter.put('/', checkToken, UserController.updateOne);
//// TODO: tokens

module.exports = userRouter;