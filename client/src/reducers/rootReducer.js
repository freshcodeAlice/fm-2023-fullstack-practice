import {combineReducers} from 'redux';
import ACTION_TYPES from "../actions/actionTypes";
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import currentChatReducer from './currentChatReducer';
import fetchingReducer from './fetchingReducer';
import chatListReducer from './chatListReducer';
import notificationReducer from './notificationReducer';

const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    isFetching: false,
    errors: null,
    notification: null
}

const rootReducer = combineReducers({
    user: userReducer,
    chatList: chatListReducer,
    currentChat: currentChatReducer,
    isFetching: fetchingReducer,
    errors: errorReducer,
    notification: notificationReducer
});


export default rootReducer;
