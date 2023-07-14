// import ACTION_TYPES from "../actions/actionTypes";
import {createSlice} from '@reduxjs/toolkit';

const initialState = [];


const chatListSlice = createSlice({
    name: 'chatList',
    initialState,
    reducers: {
        getChatListSuccess(state, action) {
            return action.payload
        },
        getUserDataSuccess(state,action) {
            return action.payload.chatList
        }
     }
});
console.log(chatListSlice);

export const { getChatListSuccess, getUserDataSuccess } = chatListSlice.actions

export default chatListSlice.reducer


/*
const initialState = [];


function chatListReducer(state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_CHAT_LIST_SUCCESS: {
            return  action.data
           }
        case ACTION_TYPES.GET_USER_DATA_SUCCESS: {
            return  action.data.chatList
        }
        case ACTION_TYPES.LOGOUT:
            return initialState;
        default: 
        return state;
    }
  
}

export default chatListReducer;


*/