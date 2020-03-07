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

export const logoutUser = () => {
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
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
            dispatch({
                type: ADD_USER,
                payload: 'User created successfully!'
            })
        })
        .catch(error => {
            dispatch({
                type: USER_ERROR,
                payload: error.message
            })
        });
    }
}

export const updateUser = ( fullName ) => {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: fullName
        }).then(() => {
            const updatedUser = firebase.auth().currentUser;
            if (updatedUser) {
                const name = user.displayName;
                const email = user.email;
                const uid = user.uid;
                const userObj = {
                    name,
                    email,
                    uid
                }
                dispatch({
                    type: LOGIN_USER,
                    payload: userObj
                })
            }
        }).catch(error => {
            console.log(error.message)
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