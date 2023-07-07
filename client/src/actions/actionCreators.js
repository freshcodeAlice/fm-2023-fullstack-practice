import ACTION_TYPES from './actionTypes';


export const addMessage = (payload) => ({
    type: ACTION_TYPES.ADD_MESSAGE,
    payload
})