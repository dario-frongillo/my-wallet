
import { FormattedNumber } from 'react-intl'
import { Provider, intlReducer } from 'react-intl-redux'
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'





export default function configureStore(preloadedState) {
    return createStore(
        combineReducers({
            intl: intlReducer,
        }),
        preloadedState,
    )
}


