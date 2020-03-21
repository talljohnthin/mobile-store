import { db } from './../../../config/firebase'
import {
    GET_ALL_SPECIALS,
    SPECIAL_REQUEST_ERROR,
    SPECIAL_REQUEST_LOADING
} from './specialTypes'

export const getAllSpecials = (countLimit) => {
    return (dispatch) => {
        dispatch({
            type: SPECIAL_REQUEST_LOADING
        })
        db.collection("specials")
        .onSnapshot(snapshot => {
            const specials = []
            snapshot.forEach(doc => {
                const obj = {
                    id: doc.id,
                    name: doc.data()
                }
                specials.push(obj)
            })
            dispatch({
                type: GET_ALL_SPECIALS,
                payload: specials
            })
        }, function (error) {
            dispatch({
                type: SPECIAL_REQUEST_ERROR,
                payload: error
            })
        });
    }
}

