import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCT_REQUEST_HINT,
    PRODUCT_REQUEST_SEARCH,
    PRODUCT_CLEAR_HINT,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    SHOW_CART_MODAL,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_ERROR
} from './../actions/product/productTypes'

const initialState = {
    productLoading:false,
    productErrorMessage:'',
    products: [],
    product: {},
    searchHint: [],
    searchAndFilters: [],
    selectedCategories: [],
    showCartModal: false
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS :
            return {
                ...state,
                productLoading: false,
                products:action.payload
            }
        case GET_PRODUCT :
            const foundProduct = findProduct(state, action.payload)
            return {
                ...state,
                productLoading: false,
                product: foundProduct
            }
        case PRODUCT_REQUEST_HINT :
            return {
                ...state,
                searchHint : action.payload,
                searchAndFilters:[],
                productErrorMessage:''
            }
        case PRODUCT_REQUEST_SEARCH :
            return {
                ...state,
                searchAndFilters: action.payload,
                searchHint:[],
                productLoading:false,
                productErrorMessage:''
            }
        case PRODUCT_REQUEST_SEGMENT_CATEGORY :
            return {
                ...state,
                selectedCategories: action.payload,
                productLoading:false,
                productErrorMessage:''
            }
        case PRODUCT_CLEAR_HINT :
            return {
                ...state,
                searchHint:[],
                productErrorMessage:''
            }
        case SHOW_CART_MODAL :
            return {
                ...state,
                showCartModal:action.payload,
                productErrorMessage:''
            }
        case PRODUCT_REQUEST_LOADING :
            return {
                ...state,
                productLoading: true,
                productErrorMessage:''
            }
        case PRODUCT_REQUEST_ERROR :
            return {
                ...state,
                productErrorMessage: action.payload,
                productLoading:false
            }
        default : return state
    }
}

const findProduct = (state, id) => {
    const newState = [...state.products]
    return newState.find( product => product.id == id )
}

export default reducer