import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CLEAR,
    CLEAR_ALL
} from '../actions/index';

let initialState = {
    response: null,
};

export default function reduce(state = initialState, action) {
    console.log('reduce', action);
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                response: { data:action.response, error:null}

            };
        case LOGIN_ERROR:
            return {
                ...state,
                response: { data:null, error:action.response}
            };

        case LOGIN_CLEAR:case CLEAR_ALL:
        return {
            ...state,
            response: null
        };

        default:
            return state;
    }
}
