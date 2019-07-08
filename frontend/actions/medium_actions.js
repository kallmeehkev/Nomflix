import * as mediumApiUtil from '../util/medium_api_util';
export const RECEIVE_MEDIA = "RECEIVE_MEDIA";
export const RECEIVE_MEDIUM = "RECEIVE_MEDIUM";
export const RECEIVE_MEDIUM_ERRORS = "RECEIVE_MEDIUM_ERRORS";

export const receiveMedia = (media) => ({
    type: RECEIVE_MEDIA,
    media
})
export const receiveMedium = (medium) => ({
    type: RECEIVE_MEDIUM,
    medium
})
export const receiveMediumErrors = errors => ({
    type: RECEIVE_MEDIUM_ERRORS,
    errors
})

export const fetchMedia = () => dispatch => (
    mediumApiUtil.fetchMedia().then( (media) => dispatch(receiveMedia(media)), 
        (errors) => dispatch(receiveMediumErrors(Object.values(errors.responseJSON))))
)
export const fetchMedium = (id) => dispatch => (
    mediumApiUtil.fetchMedium(id).then( (medium) => dispatch(receiveMedium(medium)), 
        (errors) => dispatch(receiveMediumErrors(Object.values(errors.responseJSON))))
)
