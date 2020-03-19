import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCT_SIZE,
    PRODUCT_REQUEST_HINT,
    PRODUCT_REQUEST_SEARCH,
    PRODUCT_CLEAR_HINT,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    SHOW_CART_MODAL,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_ERROR,
    GET_FILTERED_PRODUCT,
    GET_FILTERED_PRODUCT_SIZE,
    RESET_GET_FILTERED_PRODUCT_SIZE
} from './../actions/product/productTypes'

const initialState = {
    productLoading:false,
    productErrorMessage:'',
    products: [],
    productsTotal:0,
    product: {},
    searchHint: [],
    searchAndFilters: [],
    selectedCategories: [],
    selectedCategoriesTotal:0,
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
        case GET_PRODUCT_SIZE :
            return {
                ...state,
                productLoading: false,
                productsTotal: action.payload
            }
        case GET_FILTERED_PRODUCT_SIZE :
            return {
                ...state,
                productLoading: false,
                selectedCategoriesTotal: action.payload
            }
        case RESET_GET_FILTERED_PRODUCT_SIZE :
            return {
                ...state,
                selectedCategoriesTotal: 0
            }
        case GET_FILTERED_PRODUCT :
            const foundFilteredProduct = findFilteredProduct(state, action.payload)
            return {
                ...state,
                productLoading: false,
                product: foundFilteredProduct
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
    const result = newState.find( product => product.id == id )
    return result === undefined ? {} : result
}

const findFilteredProduct = (state, id) => {
    const newState = [...state.selectedCategories]
    const result = newState.find( product => product.id == id )
    return result === undefined ? {} : result
}

export default reducer