import {combineReducers} from 'redux';
import ACTION_TYPES from "../actions/actionTypes";
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import currentChatReducer from './currentChatReducer';
import fetchingReducer from './fetchingReducer';
import chatListReducer from './chatListReducer';

const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null,
}

const rootReducer = combineReducers({
    user: userReducer,
    chatList: chatListReducer,
    currentChat: currentChatReducer,
    isFetching: fetchingReducer,
    errors: errorReducer
});


export default rootReducer;
