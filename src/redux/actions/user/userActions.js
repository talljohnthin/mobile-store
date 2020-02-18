import axios from 'axios';
import { domain, axiosConfig } from './../../constant'
import { 
    USER_LOADING,
    ADD_USER,
    UPDATE_USER,
    LOGIN_USER,
    LOGOUT_USER,
    USER_ERROR,
    CLEAN_USER_SUCCESS_ERROR
} from './userTypes'

export const loginUser = (email, password) => {
    return (dispatch) => {
        axios.post(`${ domain }/users/login`, {
            email: email,
            password: password
        })
        .then(function (response) {
            const data = response.data
            const userObj = {
                username: data.user.username,
                email: data.user.email,
                id: data.user._id,
                delivery_name: data.user.delivery_name,
                delivery_address: data.user.delivery_address,
                token: data.token
            }
            dispatch({
                type: LOGIN_USER,
                payload: userObj
            })
        })
        .catch(function (error) {
            dispatch({
                type: USER_ERROR,
                payload: error
            })
        });
    }
}

export const logoutUser = (token) => {
    console.log('token: ', token)
    return (dispatch) => {
        axios(`${ domain }/users/logout`, axiosConfig('post', token))
        .then(function (response) {
            dispatch({
                type: LOGOUT_USER
            })
        })
        .catch(function (error) {
            dispatch({
                type: USER_ERROR,
                payload: error
            })
            dispatch({
                type: LOGOUT_USER
            })
            console.log('force logout')
        });
    }
}

export const addUser = (email, username, password, delivery_name, delivery_address) => {
    console.log(email, username, password, delivery_name, delivery_address)
    console.log(domain)
    return (dispatch) => {
        axios.post(`${ domain }/users`, {
            username,
            email,
            password,
            delivery_name,
            delivery_address
        })
        .then(function (response) {
            console.log('ssss')
            dispatch({
                type: ADD_USER,
                payload: response.data.message
            })
        })
        .catch(function (error) {
            console.log(error)
            dispatch({
                type: USER_ERROR,
                payload: error
            })
        });
    }
}

export const updateUser = (uid, email, username, delivery_name, delivery_address, token) => {
    return (dispatch) => {
        axios(`${ domain }/users/${ uid }`, {
            method: 'patch',
            headers: {"Authorization" : `Bearer ${ token }`},
            data: {
                username,
                email,
                delivery_name,
                delivery_address
            }
        })
        .then(function (response) {
            const data = response.data.user
            const dataObj =  {
                userData: {
                    username : data.username,
                    email : data.email,
                    delivery_name : data.delivery_name,
                    delivery_address : data.delivery_address
                },
                message : response.data.message
            }
            dispatch({
                type: UPDATE_USER,
                payload: dataObj
            })
        }) 
        .catch(function (error) {
            dispatch({
                type: USER_ERROR,
                payload: error
            })
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