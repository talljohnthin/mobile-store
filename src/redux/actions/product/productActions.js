import { db } from './../../../config/firebase'
import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    PRODUCT_REQUEST_ERROR
} from './productTypes'

export const getAllProducts = (countLimit) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        db.collection("products")
        .limit(countLimit || 40)
        .get()
        .then(snapshot => {
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
        }, function (error) {
            dispatch({
                type: PRODUCT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

export const getProduct = (productId) => {
    return (dispatch) => {
        dispatch({ type: GET_PRODUCT, payload: productId })
    }
}

export const requestProductSegmentCategory = (segment, category) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        db.collection("products")
            .where("segment", "==", segment)
            .where("category", "==", category)
            .get()
            .then(function(querySnapshot) {
                const products = []
                querySnapshot.forEach(function(doc) {
                    const obj = {
                        id: doc.id,
                        name: doc.data()
                    }
                    products.push(obj)
                })
                console.log(products)
                dispatch({
                    type: PRODUCT_REQUEST_SEGMENT_CATEGORY,
                    payload: products
                })
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            
    }
}
