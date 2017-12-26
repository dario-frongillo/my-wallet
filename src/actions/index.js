import {ENDPOINT_URI} from '../config'

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_CLEAR = 'LOGIN_CLEAR';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_CLEAR = 'SIGNUP_CLEAR';

export const CLEAR_ALL='CLEAR_ALL';

export function loginRequest(username, password, language){
    return {
        type: LOGIN,
        uri: ENDPOINT_URI.LOGIN,
        payload: {username, password},
        language:language
    }

}

export function socialLoginRequest(username, socialAuthentication, socialAccessToken,language){
    let password = '*';
    return {
        type: LOGIN,
        uri: ENDPOINT_URI.LOGIN,
        payload: {username, password,socialAuthentication,socialAccessToken},
        language:language
    }

}


export function signupRequest(username, password, email, language){
    return {
        type: SIGNUP,
        uri: ENDPOINT_URI.SIGNUP,
        payload: {username, password, email},
        language:language
    }

}