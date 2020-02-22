import axios from 'axios';
import { domain, axiosConfig  } from '../../constant'
import { db } from './../../../config/firebase'
import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCT_REQUEST_HINT,
    PRODUCT_CLEAR_HINT,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_SEARCH,
    SHOW_CART_MODAL,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    PRODUCT_REQUEST_ERROR
} from './productTypes'

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        db.collection("products")
        .onSnapshot(snapshot => {
            const products = []
            snapshot.forEach(doc => {
                const obj = {
                    id: doc.id,
                    name: doc.data()
                }
                products.push(obj)
            })
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products
            })
        }, function(error) {
            dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

export const getProduct = (productId) => {
    return (dispatch) => {
        dispatch({type: GET_PRODUCT, payload: productId})
    }
}

export const requestProductHint = (textQuery) => {
    return (dispatch) => {
              /*
        db.collection('products')
        .where('productName', '>=', textQuery)
        .where('productName', '<=', textQuery + '\uf8ff')
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      
  

        dispatch({
                type: PRODUCT_REQUEST_HINT,
                payload: searchResult
            })
        
        dispatch({
            type: PRODUCT_REQUEST_ERROR,
            payload: error
        })*/
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

export const showCartModal = (data) => {
    return (dispatch) => {
        dispatch({type: SHOW_CART_MODAL, payload: data })
    }
}


export const clearProductHint = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_CLEAR_HINT
        })
    }
}
