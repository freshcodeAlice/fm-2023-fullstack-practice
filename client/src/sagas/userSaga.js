import * as API from '../api';
import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/actionCreators';
import history from '../history';

export function* loginUserSaga(action) {
    try {   
       const {data: {data}} = yield API.signIn(action.payload);
      yield put(actionCreators.loginUserSuccess(data));
      history.push('/messenger');
    } catch(error) {
        yield put(actionCreators.loginUserError(error));
    }
}


export function* signUpUserSaga(action) {
    try {   
        const {data: {data}} = yield API.signUp(action.payload);
       yield put(actionCreators.registerUserSuccess(data));
       history.push('/messenger');
     } catch(error) {
         yield put(actionCreators.registerUserError(error));
     }
}


export function* getUserDataSaga(action) {
    try {   
        const {data: {data}} = yield API.getUserData();
       yield put(actionCreators.getUserDataSuccess(data));
     } catch(error) {
         yield put(actionCreators.getUserDataError(error));
     }
}

export function* deleteUser(){}


export function* updateUserSaga(action) {
    try {   
        const {data: {data}} = yield API.updateUser(action.payload);
       yield put(actionCreators.updateUserSuccess(data));
     } catch(error) {
         yield put(actionCreators.updateUserError(error));
     }
}

export function* logOutSaga(){
    yield API.logOut();
}