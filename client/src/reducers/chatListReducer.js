import ACTION_TYPES from "../actions/actionTypes";

const initialState = [];


function chatListReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_CHAT_LIST_SUCCESS: {
            return  action.data
           }
        case ACTION_TYPES.GET_USER_DATA_SUCCESS: {
            return  action.data.chatList
        }
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default: 
        return state;
    }
  
}

export default chatListReducer;