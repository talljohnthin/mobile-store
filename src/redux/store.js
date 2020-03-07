import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'basket']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))
    const persistor = persistStore(store)
    return { store, persistor }
}