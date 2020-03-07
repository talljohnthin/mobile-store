import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import segmentReducer from './segmentReducer'
import categoryReducer from './categoryReducer'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    user : userReducer,
    segments: segmentReducer,
    categories: categoryReducer,
    products: productReducer,
    basket: basketReducer
})

export default rootReducer