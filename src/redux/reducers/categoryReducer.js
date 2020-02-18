import { 
    GET_CATEGORIES,
    CATEGORY_REQUEST_LOADING,
    CATEGORY_REQUEST_ERROR,
    CATEGORY_CANCEL_LOADING
} from './../actions/category/categoryTypes'

const initialState = {
    categoryLoading:false,
    categoryErrorMessage:'',
    categories:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES :
            return {
                ...state,
                categories:action.payload,
                categoryLoading: false
            }
        case CATEGORY_REQUEST_LOADING :
            return {
                ...state,
                categoryLoading: true,
            }
        case CATEGORY_REQUEST_ERROR :
            return {
                ...state,
                categoryErrorMessage: action.payload,
                categoryLoading:false
            }
        case CATEGORY_CANCEL_LOADING :
            return {
                ...state,
                categoryLoading:false
            }
        default : return state
    }
}

export default reducer