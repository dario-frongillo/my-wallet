import {  intlReducer } from 'react-intl-redux'
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import login from './login.js'
import signup from './signup.js'









export default function configureStore(preloadedState,sagaMiddleware ) {
    return createStore(
        combineReducers({
            intl: intlReducer,
            login:login,
            signup:signup
        }),preloadedState,
        applyMiddleware(sagaMiddleware),

    )
}


