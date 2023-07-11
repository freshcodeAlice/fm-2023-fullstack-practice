import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {addMessageSaga, getChatList, getCurrentChat} from './chatSaga';
import {loginUserSaga, signUpUserSaga, getUserDataSaga, updateUserSaga} from './userSaga';

function* rootSaga() {
    //// users sagas
    yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga);
    yield takeLatest(ACTION_TYPES.REGISTER_USER_REQUEST, signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_USER_DATA_REQUEST, getUserDataSaga);
    yield takeLatest(ACTION_TYPES.UPDATE_USER_REQUEST, updateUserSaga);
    //// chats sagas
    yield takeLatest(ACTION_TYPES.ADD_MESSAGE_REQUEST, addMessageSaga);
    yield takeLatest(ACTION_TYPES.GET_CHAT_LIST_REQUEST, getChatList);
    yield takeLatest(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST, getCurrentChat)
}


export default rootSaga