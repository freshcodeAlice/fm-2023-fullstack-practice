import ACTION_TYPES from "../actions/actionTypes";
import {createReducer} from '@reduxjs/toolkit';
import {loginUserSuccess} from '../actions/actionCreators';

const initialState = null;

const userReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(loginUserSuccess, (state, action) => {
       return action.payload; // "Мутуємо" стейт за допомогою Immer. В такому випадку не повертаємо об'єкт стейту!!
    })
    .addCase(ACTION_TYPES.REGISTER_USER_SUCCESS, (state, action) => {
        return action.data // Повертаємо звичайний об'єкт стейту (без Immer)
    })
    .addCase(ACTION_TYPES.UPDATE_USER_SUCCESS, (state, action) => {
        return action.data
    })
    .addCase(ACTION_TYPES.GET_USER_DATA_SUCCESS, (state, action) => {
        return action.data.user;
    })
    .addCase(ACTION_TYPES.LOGOUT, (state, action) => {
        return initialState;
    })
    .addDefaultCase((state, action) => {
        return state;
    })
})

/*
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
*/

export default userReducer;