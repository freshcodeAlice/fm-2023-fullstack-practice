import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    user: {
        firstName: 'John',
        lastName: 'Doe',
        id: 147
    },
    chatList: [],
    currentChat: {
        _id: 3432423423,
        name: 'First chat',
        members: [],
        messages: []
    }
}

function rootReducer (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case ACTION_TYPES.ADD_MESSAGE: {
            return ({
                ...state,
                currentChat: {
                    ...state.currentChat,
                    messages: messages.concat(action.payload)
                    }
                })
            }
        }
    }

export default rootReducer;




/*
{
    author: 147,
    body: ,
    status: false,
    chatId
}



*/