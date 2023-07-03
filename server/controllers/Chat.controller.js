const {Chat, User, Message} = require('../models');

module.exports.createChat = async(req, res, next) => {
    try {
        const {body} = req;
        const chat = await Chat.create(body);
        res.status(201).send({data: chat})
    } catch(error) {
        next(error)
    }
}; 

module.exports.addUserToChat = async(req, res, next) => {
    try {
        const {params: {chatId}, payload: {userId}} = req;
        const chatInst = await Chat.updateOne({
            _id: chatId
        }, {
            $addToSet: {
                members: userId
            }
        });
        res.status(200).send({data: chatInst})
    } catch(error) {
        next(error)
    }
}; 

module.exports.getChatWithUsers = async(req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const chatWithMembers = await Chat.findById(chatId).populate('members');
        res.status(200).send({data: chatWithMembers});
    } catch(error) {
        next(error)
    }
}; 

module.exports.addMessage = async(req, res, next) => {
    try {
        const {body, params: {chatId}} = req;
        const chatInstance = await Chat.findById(chatId);
        const newMessageInstance = await Message.create(body);
        chatInstance.messages.push(newMessageInstance); // add messageinstance to chat model
        await chatInstance.save(); // save it to db
        res.status(201).send({data: newMessageInstance});
    } catch(error) {
        next(error)
    }
};

module.exports.getAllUserChats = async(req, res, next) => {
    try {
        const {payload: {userId}} = req;
        const usersChats = await Chat.find({
            members: userId
        });
        res.status(200).send({data: usersChats});
    } catch(error) {
        next(error)
    }
}; 



module.exports.getChatWithMessages = async (req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const chatWithMessages = await Chat.findById(chatId).populate('messages');
        res.status(200).send({data: chatWithMessages});
    }catch(error) {
        next(error)
    }
} 