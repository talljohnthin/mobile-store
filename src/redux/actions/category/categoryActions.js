import axios from 'axios';
import { domain } from '../../constant'
import { db } from './../../../config/firebase'

import { 
    GET_CATEGORIES,
    CATEGORY_REQUEST_LOADING,
    CATEGORY_REQUEST_ERROR,
    CATEGORY_CANCEL_LOADING
} from './categoryTypes'

export const getCategories = () => {
    return (dispatch) => {
        dispatch({
            type: CATEGORY_REQUEST_LOADING
        })
        db.collection("category")
        .onSnapshot(snapshot => {
            const categories = []
            snapshot.forEach(doc => {
                const obj = {
                    id: doc.id,
                    name: doc.data()
                }
                const categories = []
                .push(obj)
            })
            console.log(categories)
           /* dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            }) */
        }, function(error) {
            dispatch({
                type: CATEGORY_REQUEST_ERROR,
                payload: error
            })
        })
    }
}
