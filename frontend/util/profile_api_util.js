export const fetchProfiles = () => (
    $.ajax({
        method: 'GET',
        url: 'api/profiles'
    })
)
export const fetchProfile = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/profiles/${id}`
    })
)
export const createProfile = (profile) => (
    $.ajax({
        method: 'POST',
        url: `api/profiles`,
        data: {profile}
    })
)
export const updateProfile = (profile) => (
    $.ajax({
        method: 'PATCH',
        url: `api/profiles/${profile.id}`,
        data: { profile }
    })
)
export const deleteProfile = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/profiles/${id}`,
        data: {id}
    })
)