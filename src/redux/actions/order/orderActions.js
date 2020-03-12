import { db } from './../../../config/firebase'

import { 
    ORDER_LOADING,
    ORDER_ERROR,
    ORDER_SUCCESS,
    ORDER_RESET,
    GET_ORDERS
} from './orderTypes'

export const getOrders = (userId) => {
    return (dispatch) => {
        dispatch({
            type: ORDER_LOADING
        })
        db.collection("orders")
        .where("uid", "==", userId)
        .get()
        .then(snapshot => {
            const orders = []
            snapshot.forEach(doc => {
                const obj = {
                    id: doc.id,
                    name: doc.data()
                }
                orders.push(obj)
            })
            dispatch({
                type: GET_ORDERS,
                payload: orders
            })
        }, function (error) {
            dispatch({
                type: ORDER_ERROR,
                payload: error
            })
        });
    }
}
export const orderProducts = (orderObj) => {
    return (dispatch) => {
        dispatch({
            type: ORDER_LOADING
        })
        db.collection("orders").add(orderObj)
        .then(function(docRef) {
            dispatch({
                type: ORDER_SUCCESS
            })
        })
        .catch(function(error) {
            dispatch({
                type: ORDER_ERROR,
                payload: error
            })
        });
    }
}
export const orderReset = () => {
    return {
        type: ORDER_RESET
    }
}

