import { RECEIVE_CURRENT_PROFILE, RECEIVE_PROFILE_ERRORS } from '../actions/profile_actions'
import { CLEAR_PROFILE_ERRORS } from '../actions/errors_actions'
import { merge } from 'lodash'

const profileErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case CLEAR_PROFILE_ERRORS:
            return [];
        case RECEIVE_PROFILE_ERRORS:
            newState = action.errors;
            return newState;
        case RECEIVE_CURRENT_PROFILE:
            return [];
        default:
            return oldState;
    }
}

export default profileErrorsReducer;