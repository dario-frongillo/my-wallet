import {put, fork, call } from 'redux-saga/effects';
import {fetchGet,fetchPost
} from "../api/index";
import {
    takeLatest,
    takeEvery,
} from 'redux-saga/effects';
import Cookies from 'js-cookie';
import * as actions from '../actions/index';
import {AUTHORIZATION_HEADER} from "../config/index";

export function* login (action) {
    let language =  action.language ||'it';
    console.log('AUTHORIZATION_HEADER',AUTHORIZATION_HEADER)
    try{
        debugger;
        let response = yield call(fetchPost, action.uri, action.payload, undefined, language);
        debugger;
        if(response.status === 200){
            debugger;
            let token = response.headers[AUTHORIZATION_HEADER];
            yield put({
                type: actions.LOGIN_SUCCESS,
                response: {
                    token:token,
                    payload: response.data
                },
            });

        }else{
            yield put({
                type: actions.LOGIN_ERROR,
                response: {
                    status:response.status,
                    payload: response.data
                },
            });
        }
        console.log('response');

    } catch (errorResponse) {

        console.log(errorResponse);
    }



}

function* watchForLogin () {
    console.log('watchLoginUser');
    yield takeLatest (actions.LOGIN, login);
}

export function* signup (action) {
    let language =  action.language ||'it';
    try{
        debugger;
        let response = yield call(fetchPost, action.uri, action.payload, undefined, language);
        debugger;
        if(response.status === 200){
            debugger;
            yield put({
                type: actions.SIGNUP_SUCCESS,
                response: {
                    payload: response.data
                },
            });

        }else{
            yield put({
                type: actions.SIGNUP_ERROR,
                response: {
                    status:response.status,
                    payload: response.data
                },
            });
        }
        console.log('response');

    } catch (errorResponse) {

        console.log(errorResponse);
    }



}


function* watchForSignup () {
    console.log('watchLoginUser');
    yield takeLatest (actions.SIGNUP, signup);
}

export default function* rootSaga(){
    console.log('Running saga...');

    yield fork(watchForLogin);
    yield fork(watchForSignup);

}
