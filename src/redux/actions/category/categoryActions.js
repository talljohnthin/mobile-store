import axios from 'axios';
import { domain } from '../../constant'
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
        axios.get(`${ domain }/categories`)
        .then(function (response) {
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        })
        .catch(function (error) {
           dispatch({
                type: CATEGORY_REQUEST_ERROR,
                payload: error
            })
        });
    }
}
