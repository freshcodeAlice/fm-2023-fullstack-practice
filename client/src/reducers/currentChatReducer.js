import ACTION_TYPES from "../actions/actionTypes";

const initialState = null;


function currentChatReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_MESSAGE_SUCCESS: {
            return  {
                    ...state,
                    messages: state.messages.concat(action.data)
            }
        }
        case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS: {
            return action.data
        }
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default currentChatReducer;