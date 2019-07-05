import * as profileApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILES = "RECEIVE_PROFILES";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_PROFILE_ERRORS = "RECEIVE_PROFILE_ERRORS";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

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

export const fetchProfiles = () => dispatch => (
    profileApiUtil.fetchProfiles().then((profiles) => dispatch(receiveProfiles(profiles)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const fetchProfile = (id) => dispatch => (
    profileApiUtil.fetchProfile(id).then((profile) => dispatch(receiveProfile(profile)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const createProfile = (profile) => dispatch => (
    profileApiUtil.createProfile(profile).then((profile) => dispatch(receiveProfile(profile)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const updateProfile = (profile) => dispatch => (
    profileApiUtil.updateProfile(profile).then((profile) => dispatch(receiveProfile(profile)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)
export const deleteProfile = (id) => dispatch => (
    profileApiUtil.deleteProfile(id).then((profile) => dispatch(removeProfile(profile.id)), 
    (errors) => dispatch(receiveSessionErrors(Object.values(errors.responseJSON))))
)

