import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as ActionCreators from '../actions/actionCreators';

export function* addMessageSaga(action) {
    try {
        const result = yield API.addMessage(action.payload);

        //  Якщо запит був успішний - створити "успішний" action і віднести його до reducer-а 
        const action = ActionCreators.addMessageSuccess(result.data.data);
        yield put(action);
    } catch(error) {
        //  Якщо запит був неуспішний - створити "помилковий" action і віднести його до reducer-а 
        const errorAction = addMessageError(error);
        yield put(errorAction);
    }

}


export function* getChatList(action) {
    try {
        const {data: {data}} = yield API.getUserChats();
        yield put(ActionCreators.getChatListSuccess(data))
    } catch(error) {
        yield put(ActionCreators.getChatListError(error));
    }
}


export function* getCurrentChat(action) {
    try {
        const {data: {data}} = yield API.getCurrentChat(action.payload);
        yield put(ActionCreators.getCurrentChatSuccess(data))
    } catch(error) {
        yield put(ActionCreators.getCurrentChatError(error));
    }
}