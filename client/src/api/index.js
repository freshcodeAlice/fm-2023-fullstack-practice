import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);

export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);

export const getUserChats = async (token) => await httpClient.get('/chats/all', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});


// const BASE_API = 'http://localhost:5000'
// export const signIn = async (data) => {
//     const resp  = await fetch(`${BASE_API}/api/users/sign-in`, {
//         method: 'POST',
//         body: JSON.stringify(data)
//     });
//     return resp.json();
// }