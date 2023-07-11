import axios from 'axios';
import history from '../history';

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});

/* Auth API */

export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);

export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);

export const logOut = async () => {
    localStorage.clear();
    // перенаправляємо юзера логінитись
    history.replace('/');
}

export const refreshSession = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
   const data = await httpClient.post('/users/refresh', {refreshToken});
   return data;
}


httpClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken');
    if(token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
    return config
}, 
(err)=> Promise.reject(err));

httpClient.interceptors.response.use((response)=>{
    ///success handler
    // Виконується, якщо у відповіді 1хх, 2хх, 3хх статуси
    // Якщо в успішній відповіді прийшли токени - їх треба витягти і зберегти в localStorage
    if(response.data.tokens) {
        const {data: {tokens: {accessToken, refreshToken}}} = response;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }
    return response
}, (error) => {
    ///// error handler
    // Виконується, якщо у відповіді статуси 4хх-5хх
    // якщо 403 і при цьому в localStorage лежить refreshToken - зарефрешити сесію

    if(error.response.status === 403 && localStorage.getItem('refreshToken')) {
        // рефрешимо сесію
        console.log('REFRESH');
        return refreshSession()
        .then(() => {
            // Коли запит на оновлення сесії повернеться і нова пара токенів покладеться до localStorage, нам потрібно заново зробити запит юзера
           return httpClient(error.config)
        })
    } else if (error.response.status === 401) {
        // викинути користувача на сторінку авторизації
        logOut();
    } else {
        return Promise.reject(error);
    }


    /// Якщо 401 - перенаправити користувача на пере-авторизацію
})

export const getUserData = async () => await httpClient.get('/users/');

export const deleteUser = async () => await httpClient.delete('/users/');

export const updateUser = async (body) => await httpClient.put('/users/', body);

/* Chat API */

export const getUserChats = async () => await httpClient.get('/chats/all');


export const createChat = async () => {}

export const addMessage = async ({body, chatId}) => await httpClient.post(`/chats/${chatId}`, {body});

export const getChatWithMembers = async () => {}

export const getCurrentChat = async (chatId) => await httpClient.get(`/chats/${chatId}`);

export const addUserToChat = async () => {}