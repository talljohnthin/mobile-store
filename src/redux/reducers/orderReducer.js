import { 
    ORDER_SUCCESS,
    ORDER_LOADING,
    ORDER_ERROR
} from './../actions/order/orderTypes'


const initialState = {
    orders:[],
    isSuccess:false,
    loading:false,
    message:''
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ORDER_SUCCESS :
            return {
                ...state,
                isSuccess:true,
                loading:false,
                message:''
            }
        case ORDER_LOADING :
            return {
                ...state,
                loading: true,
                message:''
            }
        case ORDER_ERROR :
            return {
                ...state,
                loading: false,
                isSuccess:false,
                message: action.payload
            }
        default : return state
    }
}

export default reducer
