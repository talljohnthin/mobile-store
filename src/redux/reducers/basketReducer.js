import { 
    ADD_TO_BASKET,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    REMOVE_TO_BASKET,
    EMPTY_BASKET,
    SUM_TOTAL_IN_THE_BASKET,
} from './../actions/basket/basketTypes'


const initialState = {
    basket:[],
    basketTotal:0
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET :
            return {
                ...state,
                basket:[...state.basket, action.payload]
            }
        case REMOVE_TO_BASKET :
            return {
                ...state,
                basket: removeToBasket(state, action.payload)
            }
        case ADD_QUANTITY :
            return {
                ...state,
                basket: addQTY(state, action.payload)
            }
        case SUBTRACT_QUANTITY :
            return {
                ...state,
                basket: subtractQTY(state, action.payload)
            }
        case SUM_TOTAL_IN_THE_BASKET :
            return {
                ...state,
                basketTotal:sumProductsInBasket(state)
            }
        case EMPTY_BASKET :
            return {
                ...state,
                basket: [],
                basketTotal:0
            }
        default : return state
    }
}

export default reducer

const addQTY = (state, index) => {
    const basket = [...state.basket]
    if (index !== undefined || index !== null || index !== '') {
        if(basket.length) {
            const productObj = {
                id: basket[index].id,
                name: basket[index].name,
                option:basket[index].option,
                price:basket[index].price,
                qty:basket[index].qty + 1,
                variation:basket[index].variation,
                cover:basket[index].cover,
                total: ( basket[index].qty + 1 ) * Number(basket[index].price)
            }
            basket[index] = productObj
            return basket
        } else {
            return state.basket
        }
    } else {
        return state.basket
    }
}
const subtractQTY = (state, index) => {
    const basket = [...state.basket]
    if (index !== undefined || index !== null || index !== '') {
        if(basket.length) {
            const productObj = {
                id: basket[index].id,
                name: basket[index].name,
                option:basket[index].option,
                price:basket[index].price,
                qty:basket[index].qty <= 1 ? 1 : basket[index].qty - 1,
                variation:basket[index].variation,
                cover:basket[index].cover,
                total: ( basket[index].qty <= 1 ? 1 : basket[index].qty - 1 ) * Number(basket[index].price) 
            }
            basket[index] = productObj
            return basket
        } else {
            return state.basket
        }
    } else {
        return state.basket
    }
}
const removeToBasket = (state, index) => {
    const basket = [...state.basket]
    if (index !== undefined || index !== null || index !== '') {
        if(basket.length) {
            basket.splice(index, 1)
            return basket
        } else {
            return state.basket
        }
    } else {
        return state.basket
    }
}
const sumProductsInBasket = (state) => {
    const basket = [...state.basket]
    if(basket.length) {
        const total = basket.map(item => item.total)
        .reduce((prev, curr) => prev + curr, 0);
       return total
    } else {
        return 0
    }
}