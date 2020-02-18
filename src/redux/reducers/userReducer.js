import { 
    USER_LOADING,
    ADD_USER,
    UPDATE_USER,
    LOGIN_USER,
    USER_ERROR,
    LOGOUT_USER,
    CLEAN_USER_SUCCESS_ERROR
} from './../actions/user/userTypes'

const initialState = {
    isLogin:false,
    loading:false,
    user:{},
    status:'',
    message:''
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING :
            return {
                ...state,
                loading: true,
                status:'',
                message:''
            }
        case LOGIN_USER :
            return {
                ...state,
                user: action.payload,
                status:'',
                message:'',
                loading: false,
                isLogin:true,
            }
        case UPDATE_USER :
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.userData
                },
                loading: false,
                status:'success',
                message:action.payload.message
            }
        case LOGOUT_USER :
            return {
                ...state,
                status:'',
                message:'',
                loading: false,
                isLogin:false,
                user: {}
            }
        case ADD_USER :
            return {
                ...state,
                status:'success',
                message:action.payload,
                loading:false
            }
        case USER_ERROR :
            return {
                ...state,
                status:'error',
                message:action.payload.message,
                loading:false
            }
        case CLEAN_USER_SUCCESS_ERROR :
            return {
                ...state,
                status:'',
                message:'',
            }
        default : return state
    }
}

export default reducer