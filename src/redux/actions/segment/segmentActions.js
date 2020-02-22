import axios from 'axios';
import { domain } from '../../constant'
import { db } from './../../../config/firebase'
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
        db.collection("segments")
        .onSnapshot(snapshot => {
            const segments = []
            snapshot.forEach(doc => {
                const obj = {
                    id: doc.id,
                    name: doc.data()
                }
                segments.push(obj)
            })
            dispatch({
                type: GET_SEGMENTS,
                payload: segments
            })
        }, function(error) {
            dispatch({
                type: SEGMENT_REQUEST_ERROR,
                payload: error
            })
        })
    }
}