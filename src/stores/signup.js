import {
    SIGNUP_CLEAR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    CLEAR_ALL
} from '../actions/index';

let initialState = {
    response: null,
};

export default function reduce(state = initialState, action) {
    console.log('reduce', action);
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                response: { data:action.response, error:null}

            };
        case SIGNUP_ERROR:
            return {
                ...state,
                response: { data:null, error:action.response}
            };

        case SIGNUP_CLEAR:case CLEAR_ALL:
        return {
            ...state,
            response: null
        };

        default:
            return state;
    }
}
