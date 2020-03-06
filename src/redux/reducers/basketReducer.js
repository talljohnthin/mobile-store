import { 
    ADD_TO_BASKET,
    REMOVE_TO_BASKET,
} from './../actions/basket/basketTypes'

const initialState = {
    basket:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET :
            return {
                ...state,
                basket:[...state.basket, ...action.payload]
            }
        default : return state
    }
}

export default reducer