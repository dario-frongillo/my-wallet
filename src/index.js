import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
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
import { FormattedNumber } from 'react-intl'
import { Provider, intlReducer } from 'react-intl-redux'

import './assets/css/pe-icon-7-stroke.css';
import Login from 'components/Login/Login'
import { addLocaleData } from 'react-intl'
import itLocaleData from 'react-intl/locale-data/it'
import enLocaleData from 'react-intl/locale-data/en'
import moment from 'moment'
import itTranslations from './locale/it'
import enTranslations from './locale/en'

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
const muiTheme = getMuiTheme();
const store = configureStore({
    intl: targetLocale
})

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <MuiThemeProvider muiTheme={muiTheme}>


            <Switch>
                <Route path="/" name="Login" component={Login}/>
            </Switch>
            </MuiThemeProvider>

        </HashRouter>
    </Provider>

),document.getElementById('root'));
