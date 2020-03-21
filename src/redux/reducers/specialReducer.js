import { 
    GET_ALL_SPECIALS,
    SPECIAL_REQUEST_ERROR,
    SPECIAL_REQUEST_LOADING
} from './../actions/special/specialTypes'

const initialState = {
    specialLoading:false,
    specialErrorMessage:'',
    specials:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPECIALS :
            return {
                ...state,
                specialLoading: false,
                specialErrorMessage:'',
                specials:action.payload
            }
        case SPECIAL_REQUEST_LOADING :
            return {
                ...state,
                specialLoading: true,
                segmentErrorMessage:''
            }
        case SPECIAL_REQUEST_ERROR :
            return {
                ...state,
                specialErrorMessage: action.payload,
                specialLoading:false
            }
        default : return state
    }
}

export default reducer