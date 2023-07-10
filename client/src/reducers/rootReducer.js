import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null
}

function rootReducer (state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case ACTION_TYPES.GET_CURRENT_CHAT_REQUEST:
       case ACTION_TYPES.GET_CHAT_LIST_REQUEST:
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
       case ACTION_TYPES.GET_CURRENT_CHAT_ERROR:
       case ACTION_TYPES.ADD_MESSAGE_ERROR: 
       case ACTION_TYPES.LOGIN_USER_ERROR:
       case ACTION_TYPES.GET_CHAT_LIST_ERROR:
       case ACTION_TYPES.REGISTER_USER_ERROR: {
        return {
            ...state,
            errors: action.error
        }
       }
       case ACTION_TYPES.LOGIN_USER_SUCCESS:
       case ACTION_TYPES.REGISTER_USER_SUCCESS: {
        return {
            ...state,
            user: action.data
        }
       }
       case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS: {
        return {
            ...state,
            currentChat: action.data
        }
       }
       case ACTION_TYPES.GET_CHAT_LIST_SUCCESS: {
        return {
            ...state,
            chatList: action.data
        }
       }
       case ACTION_TYPES.GET_USER_DATA_SUCCESS: {
        return {
            ...state,
            user: action.data.user,
            chatList: action.data.chatList
        }
       }
       default: {
        return state;
      }
    }
}

export default rootReducer;
