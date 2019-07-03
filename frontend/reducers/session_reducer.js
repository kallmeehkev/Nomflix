import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'
import { merge } from 'lodash'

const defaultState = { id: null };

const sessionReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id;
            return newState;
        case REMOVE_CURRENT_USER:
            return defaultState;
        default:
            return oldState;
    }
}

export default sessionReducer;