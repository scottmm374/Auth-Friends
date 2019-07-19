import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';


export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })

        return 
        axios.post('http//localhost:5000/api/login', {username, password })
            .then((response) => {
                localStorage.setItem('token', res.data.token)
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch((error) => {
                const payload = error.response ? error.response.data : error
                dispatch({ type: LOGIN_FAILED, payload})
            })
    }
}