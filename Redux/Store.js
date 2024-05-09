import { legacy_createStore as createstore, compose, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'

import ShowSplash from './Reducer/SplashReducer'
import splashReducer from './Reducer/dataReducer'

const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    splash: ShowSplash,
    data: splashReducer,
})


export const store = createstore(rootReducer, applyMiddleware(thunk));


