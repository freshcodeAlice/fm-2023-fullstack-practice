import * as API from '../api';
import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';

export function* loginUserSaga(action) {
    try {   
       const {data: {data}} = yield API.signIn(action.payload);
      yield put(actionCreators.loginUserSuccess(data));
    } catch(error) {
        yield put(actionCreators.loginUserError(error));
    }
}


export function* signUpUserSaga(action) {
    try {   
        const {data: {data}} = yield API.signUp(action.payload);
       yield put(actionCreators.registerUserSuccess(data));
     } catch(error) {
         yield put(actionCreators.registerUserError(error));
     }
}


export function* getUserData() {}

export function* deleteUser(){}