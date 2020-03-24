import {myFirebase} from '../../util/base';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"


export const loginUser = (email, password) => dispatch => {
    dispatch({type: LOGIN_REQUEST})
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({type: LOGIN_SUCCESS, payload: user.res})
        })
        .catch(error => {
            dispatch({type: LOGIN_FAILURE, payload: error.res})
        })
}

export const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT_REQUEST})
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({type: LOGOUT_SUCCESS})
        })
        .catch(error => {
            console.log("ERROR LOGGING OUT", error)
            dispatch({type: LOGOUT_FAILURE, payload: error.res})
        })
}

export const verifyAuth = () => dispatch => {
    dispatch({type: VERIFY_REQUEST})
    myFirebase.auth().onAuthStateChanged(user => {
        if(user !== null){
            dispatch({type: LOGIN_SUCCESS, payload: user.res})
        }
        dispatch({type: VERIFY_SUCCESS, payload: user})
    })
}

export const signUpUser = (email, password) => dispatch => {
    dispatch({type: SIGNUP_REQUEST})
    myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({type: SIGNUP_SUCCESS, payload: user.res})
        })
        .catch(error => {
            dispatch({type: SIGNUP_FAILURE, payload: error.res})
        })
}