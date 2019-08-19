import { RECEIVE_SEARCH_ERRORS } from '../actions/search_actions';
import { CLEAR_SEARCH_ERRORS } from '../actions/errors_actions';
import { merge } from 'lodash';

const searchErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case CLEAR_SEARCH_ERRORS:
            return [];
        case RECEIVE_SEARCH_ERRORS:
            newState = action.errors;
            return newState;
        default:
            return oldState;
    }
}

export default searchErrorsReducer;