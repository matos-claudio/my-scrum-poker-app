import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import userLoggedReducer from './reducers/user'
import roomLoggedReducer from './reducers/room'

const reducers = combineReducers({
    userLogged: userLoggedReducer,
    roomLogged: roomLoggedReducer
})

const storeConfig = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig