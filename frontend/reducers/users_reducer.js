import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { merge } from 'lodash'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            newState[action.currentUser.id] = action.currentUser
            return newState;
        default:
            return oldState;
    }
}

export default usersReducer;