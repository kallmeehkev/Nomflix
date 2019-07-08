import { RECEIVE_GENRES } from '../actions/genre_actions';
import { merge } from 'lodash'

const genresReducer = (oldState = { 1: { name: "" } }, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch(action.type) {
        case RECEIVE_GENRES:
            return action.genres;
        default:
            return oldState;
    }
}

export default genresReducer;