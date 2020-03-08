import { db } from './../../../config/firebase'

import { 
    ORDER_PRODUCTS,
    ORDER_LOADING,
    ORDER_ERROR,
    ORDER_SUCCESS
} from './orderTypes'

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
