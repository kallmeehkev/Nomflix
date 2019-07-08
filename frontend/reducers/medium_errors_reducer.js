import { RECEIVE_MEDIUM_ERRORS } from '../actions/medium_actions'
import { CLEAR_MEDIUM_ERRORS } from '../actions/errors_actions'
import { merge } from 'lodash'

const mediumErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case CLEAR_MEDIUM_ERRORS:
            return [];
        case RECEIVE_MEDIUM_ERRORS:
            newState = action.errors;
            return newState;
        default:
            return oldState;
    }
}

export default mediumErrorsReducer;