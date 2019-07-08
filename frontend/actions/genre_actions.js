import * as genreApiUtil from '../util/genre_api_util';
export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres
})

export const receiveGenre = (payload) => ({
    type: RECEIVE_GENRE,
    payload
})

export const fetchGenres = () => dispatch => (
    genreApiUtil.fetchGenres().then( (genres) => dispatch(receiveGenres(genres)))
)

export const fetchGenre = (id) => dispatch => (
    genreApiUtil.fetchGenre(id).then( (genre) => dispatch(receiveGenre(genre)))
)