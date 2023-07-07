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
    },
    isFetching: false,
    errors: null
}

function rootReducer (state = initialState, action) {
    console.log(action);
    switch(action.type) {
       case ACTION_TYPES.ADD_MESSAGE_REQUEST: {
        return {
            ...state,
            isFetching: true
        }
       }
       case ACTION_TYPES.ADD_MESSAGE_SUCCESS: {
        return {
            ...state,
            currentChat: {
                ...state.currentChat,
                messages: state.currentChat.messages.concat(action.data)
            }
            }
       }
       case ACTION_TYPES.ADD_MESSAGE_ERROR: {
        return {
            ...state,
            error: action.error
        }
       }
    }
    }

export default rootReducer;
