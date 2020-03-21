import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import segmentReducer from './segmentReducer'
import categoryReducer from './categoryReducer'
import basketReducer from './basketReducer'
import orderReducer from './orderReducer'
import specialReducer from './specialReducer'

const rootReducer = combineReducers({
    user : userReducer,
    segments: segmentReducer,
    categories: categoryReducer,
    products: productReducer,
    basket: basketReducer,
    orders: orderReducer,
    specials: specialReducer
})

export default rootReducer