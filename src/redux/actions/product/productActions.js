import axios from 'axios';
import { domain, axiosConfig  } from '../../constant'
import { 
    GET_ALL_PRODUCTS,
    PRODUCT_REQUEST_HINT,
    PRODUCT_CLEAR_HINT,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_SEARCH,
    SHOW_WISH_MODAL,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    PRODUCT_REQUEST_ERROR
} from './productTypes'

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        axios.get(`${ domain }/products`)
        .then(function (response) {
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log(error.message)
           dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

export const requestProductHint = (textQuery) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        axios.post(`${ domain }/products/search/hint`, {
            search: textQuery
        })
        .then(function (response) {
            const searchResult = response.data
            dispatch({
                type: PRODUCT_REQUEST_HINT,
                payload: searchResult
            })
        })
        .catch(function (error) {
            dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

export const searchRequestProducts = (text) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        axios.post(`${ domain }/products/search`, {
            search: text,
        })
        .then((response) => {
            dispatch({
                type: PRODUCT_REQUEST_SEARCH,
                payload: response.data
            })
        }, (error) => {
            dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

export const requestProductSegmentCategory = (segmentId,categoryId) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        axios.get(`${ domain }/products?segmentid=${ segmentId }&categoryid=${ categoryId }`)
        .then(function (response) {
            dispatch({
                type: PRODUCT_REQUEST_SEGMENT_CATEGORY,
                payload: response.data
            })
        })
        .catch(function (error) {
            console.log(error.message)
            dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}


export const clearProductHint = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_CLEAR_HINT
        })
    }
}
