import { merge } from 'lodash';
import { RECEIVE_MEDIA, RECEIVE_MEDIUM } from '../actions/medium_actions';
import { RECEIVE_GENRE } from '../actions/genre_actions';
import { RECEIVE_PROFILE } from '../actions/profile_actions';

const mediaReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState;
    switch(action.type) {
        case RECEIVE_MEDIA:
            return action.media
        case RECEIVE_MEDIUM:
            newState = merge({}, oldState)
            newState[action.medium.id] = action.medium;
            return newState;
        case RECEIVE_GENRE: 
            newState = merge({}, oldState, action.payload.media)
            return newState;
        case RECEIVE_PROFILE:
            newState = merge({}, oldState, action.payload.listedMedia)
            return newState;
        default:
            return oldState;
    }
}

export default mediaReducer;