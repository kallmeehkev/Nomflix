import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions'
import { CLEAR_SESSION_ERRORS } from '../actions/errors_actions'
import { merge } from 'lodash'




const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case CLEAR_SESSION_ERRORS:
            return [];
        case RECEIVE_SESSION_ERRORS:
            newState = action.errors;
            return newState;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;