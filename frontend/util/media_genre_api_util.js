export const fetchMediaGenres = () => (
    $.ajax({
        method: 'GET',
        url: 'api/media_genres'
    })
)

export const fetchMediaGenre = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/media_genres/${id}`
    })
)