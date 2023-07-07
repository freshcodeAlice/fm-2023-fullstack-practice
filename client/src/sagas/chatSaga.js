import {put} from 'redux-saga/effects';
import {addMessage} from '../api';
import {addMessageSuccess, addMessageError} from '../actions/actionCreators';

export function* addMessageSaga(action) {
    try {
        const result = yield addMessage(action.payload);

        //  Якщо запит був успішний - створити "успішний" action і віднести його до reducer-а 
        const action = addMessageSuccess(result.data.data);
        yield put(action);
    } catch(error) {
        //  Якщо запит був неуспішний - створити "помилковий" action і віднести його до reducer-а 
        const errorAction = addMessageError(error);
        yield put(errorAction);
    }

}