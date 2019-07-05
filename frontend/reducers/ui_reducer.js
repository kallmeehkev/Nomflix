import { RECEIVE_CURRENT_PROFILE, REMOVE_CURRENT_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash'


const uiReducer = (oldState = { currentProfileId: null }, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            newState.currentProfileId = action.profileId
            return newState;
        case REMOVE_CURRENT_PROFILE:
            newState.currentProfileId = null;
            return newState;
        default:
            return oldState;
    }
}

export default uiReducer;