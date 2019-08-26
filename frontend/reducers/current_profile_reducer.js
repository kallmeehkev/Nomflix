import { RECEIVE_CURRENT_PROFILE, REMOVE_CURRENT_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash';

const currentProfileReducer = (oldState = null , action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_PROFILE:
            newState = action.profileId
            return newState;
        case REMOVE_CURRENT_PROFILE:
            newState = null;
            return newState;
        default:
            return oldState;
    }
}

export default currentProfileReducer;