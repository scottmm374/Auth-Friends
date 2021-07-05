import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from './actions';

const initialstate = {
    isLoading: false,
    errorMessage: null,
    name: '',
    age: 0,
    email: '',
    id: null,
}

export default function (state= initialstate, action){
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case LOGIN_SUCCESS: {
            const { name, age, email, id} = state
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                name,
                age,
                email,
                id
            }
        }

        case LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.message,
            }
        }
        default: 
            return state
    }
}