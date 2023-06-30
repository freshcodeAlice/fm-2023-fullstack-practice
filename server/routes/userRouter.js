const express = require('express');
const userRouter =  express.Router();
const {hashPass} = require('../middlewares/hashPass');
const UserController = require('../controllers/User.controller');

userRouter.post('/sign-up', hashPass, UserController.signUp); //signUp
userRouter.post('/sign-in', UserController.signIn); //signIn
userRouter.get('/:id', UserController.getOne);
userRouter.delete('/:id', UserController.deleteOne);

//// TODO: tokens

module.exports = userRouter;