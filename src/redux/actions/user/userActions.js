import axios from 'axios';
import { domain, axiosConfig } from './../../constant'
import firebase from './../../../config/firebase'
import { 
    USER_LOADING,
    ADD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    USER_ERROR,
    CLEAN_USER_SUCCESS_ERROR
} from './userTypes'

export const loginUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            dispatch({
                type: USER_ERROR,
                payload: error.message
            })
        });
    }
}

export const signIn = (user) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            payload: user
        })
    }
}

export const logoutUser = (token) => {
    return (dispatch) => {
        firebase.auth()
        .signOut()
        .then(function() {
            dispatch({
                type: LOGOUT_USER
            })
        }).catch(function(error) {
            dispatch({
                type: USER_ERROR,
                payload: error
            })
            dispatch({
                type: LOGOUT_USER
            })
        });
    }
}

export const addUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
}

export const userLoading = () => {
    return {
        type: USER_LOADING
    }
}

export const userError = error => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

export const cleanUserSuccessError = () => {
    return {
        type: CLEAN_USER_SUCCESS_ERROR
    }
}