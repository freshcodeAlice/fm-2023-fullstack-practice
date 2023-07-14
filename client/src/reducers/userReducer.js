import ACTION_TYPES from "../actions/actionTypes";

const initialState = null;


function userReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
        case ACTION_TYPES.REGISTER_USER_SUCCESS:
        case ACTION_TYPES.UPDATE_USER_SUCCESS: {
            return action.data
        }
        case ACTION_TYPES.GET_USER_DATA_SUCCESS:{
            return action.data.user;
        }
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default: {
            return state
        }
    }
}

export default userReducer;