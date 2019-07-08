import * as mediaGenreApiUtil from '../util/media_genre_api_util';
export const RECEIVE_MEDIA_GENRES = "RECEIVE_MEDIA_GENRES";
export const RECEIVE_MEDIA_GENRE = "RECEIVE_MEDIA_GENRE";

export const receiveMediaGenres = (mediaGenres) => ({
    type: RECEIVE_MEDIA_GENRES,
    mediaGenres
})

export const receiveMediaGenre = (mediaGenre) => ({
    type: RECEIVE_MEDIA_GENRE,
    mediaGenre
})

export const fetchMediaGenres = () => dispatch => (
    mediaGenreApiUtil.fetchMediaGenres().then((mediaGenres) => dispatch(receiveMediaGenres(mediaGenres)))
)

export const fetchMediaGenre = (id) => dispatch => (
    mediaGenreApiUtil.fetchMediaGenre(id).then((mediaGenre) => dispatch(receiveMediaGenre(mediaGenre)))
)