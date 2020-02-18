import axios from 'axios';
import { domain } from '../../constant'
import { 
    GET_SEGMENTS,
    SEGMENT_REQUEST_LOADING,
    SEGMENT_REQUEST_ERROR
} from './segmentTypes'

export const getSegments = () => {
    return (dispatch) => {
        dispatch({
            type: SEGMENT_REQUEST_LOADING
        })
        axios.get(`${ domain }/segments`)
        .then(function (response) {
            dispatch({
                type: GET_SEGMENTS,
                payload: response.data
            })
        })
        .catch(function (error) {
           dispatch({
                type: SEGMENT_REQUEST_ERROR,
                payload: error
            })
        });
    }
}