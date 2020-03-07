import { db } from './../../../config/firebase'

import { 
    ORDER_PRODUCTS,
    ORDER_LOADING,
    ORDER_ERROR
} from './orderTypes'

export const orderProducts = (orderObj) => {
    return (dispatch) => {
        dispatch({
            type: ORDER_LOADING
        })
        db.collection("orders").add(orderObj)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            // dispatch({
            //     type: ORDER_PRODUCTS,
            //     payload: categories
            // })
        })
        .catch(function(error) {
            dispatch({
                type: ORDER_ERROR,
                payload: error
            })
        });
    }
}
