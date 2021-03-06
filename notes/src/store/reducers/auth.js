import {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../actions/auth'


const initialState = {
    currentUser : {},
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logOutError: false,
    isAuthenticated: false,
    isSigningUp: false,
    signUpError: false
}

export const auth = (state = initialState, action) => {
    
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false

            } 
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                currentUser: action.payload

            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true

            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                loginError: false

            } 
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                currentUser: {}

            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true

            }
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false

            }
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false

            }
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSigningUp: true,
                signUpError: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                isAuthenticated: true,
                currentUser: action.payload

            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                isAuthenticated: false,
                logOutError: true

            }
        default:
            return state;
    }
}