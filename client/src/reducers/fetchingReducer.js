import ACTION_TYPES from "../actions/actionTypes";

const initialState = false;


function fetchingReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE_REQUEST:
        case ACTION_TYPES.GET_CHAT_LIST_REQUEST:
        case ACTION_TYPES.GET_CURRENT_CHAT_REQUEST:
        case ACTION_TYPES.GET_USER_DATA_REQUEST:
        case ACTION_TYPES.LOGIN_USER_REQUEST:
        case ACTION_TYPES.REGISTER_USER_REQUEST:
        case ACTION_TYPES.UPDATE_USER_REQUEST:
            return true;
        case ACTION_TYPES.ADD_MESSAGE_ERROR:
        case ACTION_TYPES.ADD_MESSAGE_SUCCESS:
            return false;
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default: 
        return state;
    }
}

export default fetchingReducer;