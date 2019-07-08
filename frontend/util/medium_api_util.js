export const fetchMedia = () => (
    $.ajax({
        method: 'GET',
        url: 'api/media'
    })
)
export const fetchMedium = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/media/${id}`
    })
)