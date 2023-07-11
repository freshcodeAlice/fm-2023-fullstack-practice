import ACTION_TYPES from './actionTypes';

////users


export const loginUserRequest = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_REQUEST,
    payload
});

export const loginUserSuccess = (data) => ({
    type: ACTION_TYPES.LOGIN_USER_SUCCESS,
    data
});

export const loginUserError = (error) => ({
    type: ACTION_TYPES.LOGIN_USER_ERROR,
    error
})

///

export const registerUserRequest = (payload) => ({
    type: ACTION_TYPES.REGISTER_USER_REQUEST,
    payload
});

export const registerUserSuccess = (data) => ({
    type: ACTION_TYPES.REGISTER_USER_SUCCESS,
    data
});

export const registerUserError = (error) => ({
    type: ACTION_TYPES.REGISTER_USER_ERROR,
    error
})

////

export const getUserDataRequest = (payload) => ({
    type: ACTION_TYPES.GET_USER_DATA_REQUEST,
    payload
});

export const getUserDataSuccess = (data) => ({
    type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
    data
});

export const getUserDataError = (error) => ({
    type: ACTION_TYPES.GET_USER_DATA_ERROR,
    error
})


//// 

export const updateUserRequest = (payload) => ({
    type: ACTION_TYPES.UPDATE_USER_REQUEST,
    payload
});

export const updateUserSuccess = (data) => ({
    type: ACTION_TYPES.UPDATE_USER_SUCCESS,
    data
});

export const updateUserError = (error) => ({
    type: ACTION_TYPES.UPDATE_USER_ERROR,
    error
})


////


export const logOut = (error) => ({
    type: ACTION_TYPES.LOGOUT
})


/// chats

export const addMessageRequest = (payload) => ({
    type: ACTION_TYPES.ADD_MESSAGE_REQUEST,
    payload
});

export const addMessageSuccess = (data) => ({
    type: ACTION_TYPES.ADD_MESSAGE_SUCCESS,
    data
});

export const addMessageError = (error) => ({
    type: ACTION_TYPES.ADD_MESSAGE_ERROR,
    error
})

///

export const getChatListRequest = (payload) => ({
    type: ACTION_TYPES.GET_CHAT_LIST_REQUEST,
    payload
});

export const getChatListSuccess = (data) => ({
    type: ACTION_TYPES.GET_CHAT_LIST_SUCCESS,
    data
});

export const getChatListError = (error) => ({
    type: ACTION_TYPES.GET_CHAT_LIST_ERROR,
    error
})

///

export const getCurrentChatRequest = (payload) => ({
    type: ACTION_TYPES.GET_CURRENT_CHAT_REQUEST,
    payload
})

export const getCurrentChatSuccess = (data) => ({
    type: ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS,
    data
})

export const getCurrentChatError = (error) => ({
    type: ACTION_TYPES.GET_CURRENT_CHAT_ERROR,
    error
})



/// ui actions
