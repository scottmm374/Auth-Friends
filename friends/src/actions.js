import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILED = 'GET_FRIENDS_FAILED';

export function getFriends () {
    return (dispatch) => {
        dispatch({ type: GET_FRIENDS_START})
        const headers = {
            Authorization: localStorage.getItem('token'),
        }

        axios.get('', {headers})
            .then((response) => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: response.data})
            })
            .catch((error) => {
                dispatch({ type: GET_FRIENDS_FAILED, payload: error.response.data})
            })
    }
}



export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })

        return 
        axios.post('http//localhost:5000/api/login', {username, password })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch((error) => {
                const payload = error.response ? error.response.data : error
                dispatch({ type: LOGIN_FAILED, payload})
            })
    }
}