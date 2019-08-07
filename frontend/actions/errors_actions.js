export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLEAR_PROFILE_ERRORS = "CLEAR_PROFILE_ERRORS";
export const CLEAR_MEDIUM_ERRORS = "CLEAR_MEDIUM_ERRORS";
export const CLEAR_MYLIST_ERRORS = "CLEAR_MYLIST_ERRORS";

export const clearSessionErrors = () => dispatch => (
    dispatch({
    type: CLEAR_SESSION_ERRORS
}))
export const clearProfileErrors = () => dispatch => (
    dispatch({
    type: CLEAR_PROFILE_ERRORS
}))
export const clearMediumErrors = () => dispatch => (
    dispatch({
    type: CLEAR_MEDIUM_ERRORS
}))
export const clearMyListErrors = () => dispatch => (
    dispatch({
    type: CLEAR_MYLIST_ERRORS
}))