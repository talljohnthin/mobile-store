import { 
    GET_SEGMENTS,
    SEGMENT_REQUEST_LOADING,
    SEGMENT_REQUEST_ERROR
} from './../actions/segment/segmentTypes'

const initialState = {
    segmentLoading:false,
    segmentErrorMessage:'',
    segments:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_SEGMENTS :
            return {
                ...state,
                segmentLoading: false,
                segmentErrorMessage:'',
                segments:action.payload
            }
        case SEGMENT_REQUEST_LOADING :
            return {
                ...state,
                segmentLoading: true,
                segmentErrorMessage:''
            }
        case SEGMENT_REQUEST_ERROR :
            return {
                ...state,
                segmentErrorMessage: action.payload,
                segmentLoading:false
            }
        default : return state
    }
}

export default reducer