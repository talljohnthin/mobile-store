import { 
    ADD_TO_BASKET,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    REMOVE_TO_BASKET,
    SUM_TOTAL_IN_THE_BASKET
} from './basketTypes'

export const addToBasket = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_BASKET,
            payload: product
        })
    }
}
export const removeToBasket = (index) => {
    return {
        type: REMOVE_TO_BASKET,
        payload: index
    }
}
export const addQuantity = (index) => {
    return {
        type: ADD_QUANTITY,
        payload: index
    }
}
export const subtractQuantity = (index) => {
    return {
        type: SUBTRACT_QUANTITY,
        payload: index
    }
}
export const sumProductsInBasket = () => {
    return {
        type: SUM_TOTAL_IN_THE_BASKET
    }
}
