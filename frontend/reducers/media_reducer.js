import { merge } from 'lodash'
import { RECEIVE_MEDIA, RECEIVE_MEDIUM } from '../actions/medium_actions'

const mediaReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = merge({}, oldState)
    switch(action.type) {
        case RECEIVE_MEDIA:
            return action.media
        case RECEIVE_MEDIUM:
            newState[action.medium.id] = action.medium;
            return newState;
        default:
            return oldState;
    }
}

export default mediaReducer;