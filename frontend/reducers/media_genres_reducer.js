import { RECEIVE_MEDIA_GENRES, RECEIVE_MEDIA_GENRE } from '../actions/media_genre_actions';
import { merge } from 'lodash'

const mediaGenresReducer = (oldState = { 1: { mediaId: 0, genreId: 0 } }, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_MEDIA_GENRES:
            return action.mediaGenres;
        case RECEIVE_MEDIA_GENRE:
            newState[action.mediaGenre.id] = action.mediaGenre;
            return newState;
        default:
            return oldState;
    }
}

export default mediaGenresReducer;