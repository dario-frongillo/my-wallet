import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';
import configureStore from './stores'
import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Provider, intlReducer } from 'react-intl-redux'
import Main from 'containers/Main/Main'
import './assets/css/pe-icon-7-stroke.css';
import Login from 'components/Login/Login'
import { addLocaleData } from 'react-intl'
import itLocaleData from 'react-intl/locale-data/it'
import enLocaleData from 'react-intl/locale-data/en'
import itTranslations from './locale/it'
import enTranslations from './locale/en'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';


addLocaleData([
    ...itLocaleData,
    ...enLocaleData,
])


const translations = {
    it: itTranslations,
    en: enTranslations
}

let userLang = navigator.language || navigator.userLanguage;
userLang = navigator.language.substring(0, 2);

const  targetLocale= translations[userLang] ||enLocaleData;
const preloadedState = ({
    intl: targetLocale
});
const muiTheme = getMuiTheme();
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(preloadedState,sagaMiddleware)

sagaMiddleware.run(rootSaga);


ReactDOM.render((
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
{/*            <MuiThemeProvider muiTheme={muiTheme}>
                <Main />
            </MuiThemeProvider>*/}

            <Switch>
                <Route path="/" name="Home" component={App}/>
            </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
    </Provider>

),document.getElementById('root'));
