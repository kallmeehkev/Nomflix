import * as sessionApiUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (user) => dispatch => (
    sessionApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const signup = (user) => dispatch => (
    sessionApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const logout = (user) => dispatch => (
    sessionApiUtil.logout(user).then(() => dispatch(logoutCurrentUser()), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
