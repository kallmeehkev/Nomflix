import { merge } from 'lodash'
import { RECEIVE_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE } from '../actions/profile_actions'

const profilesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch(action.type) {
        case RECEIVE_PROFILES:
            return action.profiles;
        case RECEIVE_PROFILE:
            newState[action.profile.id] = action.profile;
            return newState;
        case REMOVE_PROFILE:
            delete(newState[action.profileId]);
            return newState;
        default:
            return oldState;
    }
}

export default profilesReducer;