import { 
    ORDER_SUCCESS,
    ORDER_LOADING,
    ORDER_ERROR,
    ORDER_RESET,
    GET_ORDERS
} from './../actions/order/orderTypes'


const initialState = {
    orders:[],
    isSuccess:false,
    ordersLoading:false,
    message:''
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS :
            return {
                ...state,
                ordersLoading: false,
                orders:action.payload
            }
        case ORDER_SUCCESS :
            return {
                ...state,
                isSuccess:true,
                ordersLoading:false,
                message:''
            }
        case ORDER_RESET: 
            return {
                ...state,
                isSuccess:false,
                ordersLoading:false,
                message:''
            }
        case ORDER_LOADING :
            return {
                ...state,
                ordersLoading: true,
                message:''
            }
        case ORDER_ERROR :
            return {
                ...state,
                ordersLoading: false,
                isSuccess:false,
                message: action.payload
            }
        default : return state
    }
}

export default reducer
