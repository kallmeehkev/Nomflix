import * as profileApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILES = "RECEIVE_PROFILES";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const REMOVE_CURRENT_PROFILE = "REMOVE_CURRENT_PROFILE";
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE"

export const receiveProfiles = profiles => ({
    type: RECEIVE_PROFILES,
    profiles
})
export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE,
    profile
})
export const removeProfile = profileId => ({
    type: REMOVE_PROFILE,
    profileId
})
export const receiveProfileErrors = errors => ({
    type: RECEIVE_PROFILE_ERRORS,
    errors
})

export const receiveCurrentProfile = (profileId) => ({
    type: RECEIVE_CURRENT_PROFILE,
    profileId
})
export const removeCurrentProfile = (profileId) => ({
    type: REMOVE_CURRENT_PROFILE,
    profileId
})

export const fetchProfiles = () => dispatch => (
    profileApiUtil.fetchProfiles().then((profiles) => dispatch(receiveProfiles(profiles)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const fetchProfile = (id) => dispatch => (
    profileApiUtil.fetchProfile(id).then((profile) => dispatch(receiveProfile(profile)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const createProfile = (profile) => dispatch => (
    profileApiUtil.createProfile(profile).then((profile) => { 
        dispatch(receiveProfile(profile));
        dispatch(receiveCurrentProfile(profile))}, 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const updateProfile = (profile) => dispatch => (
    profileApiUtil.updateProfile(profile).then((profile) => dispatch(receiveProfile(profile)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const deleteProfile = (id) => dispatch => (
    profileApiUtil.deleteProfile(id).then((profile) => dispatch(removeProfile(profile.id)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const setCurrentProfile = (id) => dispatch => (
    profileApiUtil.setCurrentProfile(id).then((profile) => dispatch(receiveCurrentProfile(profile.id)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)
export const unSetCurrentProfile = (id) => dispatch => (
    profileApiUtil.unSetCurrentProfile(id).then((profile) => dispatch(removeCurrentProfile(profile.id)), 
    (errors) => dispatch(receiveProfileErrors(Object.values(errors.responseJSON))))
)


