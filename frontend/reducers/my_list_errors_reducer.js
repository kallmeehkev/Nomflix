import { RECEIVE_MYLIST_ERRORS } from '../actions/my_list_actions';
import { CLEAR_MYLIST_ERRORS } from '../actions/errors_actions';
import { merge } from 'lodash';

const myListErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case CLEAR_MYLIST_ERRORS:
            return [];
        case RECEIVE_MYLIST_ERRORS:
            newState = action.errors;
            return newState;
        default:
            return oldState;
    }
}

export default myListErrorsReducer;