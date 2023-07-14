import ACTION_TYPES from "../actions/actionTypes";

const initialState = null;

function errorReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.UPDATE_USER_ERROR:
        case ACTION_TYPES.GET_CURRENT_CHAT_ERROR:
        case ACTION_TYPES.ADD_MESSAGE_ERROR: 
        case ACTION_TYPES.LOGIN_USER_ERROR:
        case ACTION_TYPES.GET_CHAT_LIST_ERROR:
        case ACTION_TYPES.REGISTER_USER_ERROR: {
            return  action.error
        }
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default: {
            return state;
        }
    }
}


export default errorReducer;