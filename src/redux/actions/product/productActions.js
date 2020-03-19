import { db } from './../../../config/firebase'
import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    PRODUCT_REQUEST_LOADING,
    PRODUCT_REQUEST_SEGMENT_CATEGORY,
    PRODUCT_REQUEST_ERROR,
    GET_FILTERED_PRODUCT,
    GET_FILTERED_PRODUCT_SIZE,
    GET_PRODUCT_SIZE,
    RESET_GET_FILTERED_PRODUCT_SIZE
} from './productTypes'

export const getAllProducts = (countLimit) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        db.collection("products")
        .limit(countLimit || 10)
        .get()
        .then(snapshot => {
            console.log(snapshot.size)
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
        // GET_PRODUCT_SIZE
        db.collection("products")
        .get()
        .then(snapshot => {
            dispatch({
                type: GET_PRODUCT_SIZE,
                payload: snapshot.size
            })
        })
    }
}

export const getRestProducts = (countLimit) => {
    return (dispatch) => {
        db.collection("products")
        .limit(countLimit)
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

export const getFilteredProduct = (productId) => {
    return (dispatch) => {
        dispatch({ type: GET_FILTERED_PRODUCT, payload: productId })
    }
}

export const requestProductSegmentCategory = (segment, category, countLimit) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST_LOADING
        })
        db.collection("products")
            .where("segment", "==", segment)
            .where("category", "==", category)
            .limit(countLimit || 10)
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

export const requestRestProductSegmentCategory = (segment, category, countLimit) => {
    return (dispatch) => {
        db.collection("products")
            .where("segment", "==", segment)
            .where("category", "==", category)
            .limit(countLimit)
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

export const getFilteredProductSize = (segment, category) => {
    return (dispatch) => {
        db.collection("products")
        .where("segment", "==", segment)
        .where("category", "==", category)
        .get()
        .then(snapshot => {
            dispatch({
                type: GET_FILTERED_PRODUCT_SIZE,
                payload: snapshot.size
            })
        })    
    }
}

export const resetGetFilteredProductSize = () => {
    return {
        type: RESET_GET_FILTERED_PRODUCT_SIZE
    }
}

