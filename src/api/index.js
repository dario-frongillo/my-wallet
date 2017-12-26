import {AUTHORIZATION_HEADER, BASE_URL} from '../config'
import axios from 'axios'

const getHeaders = (token, language) => {
    if (token) {
        return {
            'Content-Type': 'application/json',
            AUTHORIZATION_HEADER: token,
            'Accept-Language': language
        }
    }else {
        return {
            'Content-Type': 'application/json',
            'Accept-Language': language
        }
    }
}

const getEndpointUrl=(resourceUri)=>{
    return BASE_URL+resourceUri;
}

export function fetchGet(uri, token, language) {
    console.log('API queryGet: ' + uri);
    let headers = getHeaders(token,language);

    return axios.get(getEndpointUrl(uri), headers)
        .then(response =>{
            return response;
        })
        .catch((error) => {
            console.log('error ' + error);
            return error;
        });

}

export function fetchPost(uri, data, token, language) {
    console.log('API queryGet: ' + uri);
    let headers = getHeaders(token,language);

    return axios.post(getEndpointUrl(uri), data, headers)
        .then(response =>{
            debugger;
            return response;
        })
        .catch((error) => {
            console.log('error ' + error);
            debugger;
            return error.response;
        });

}

