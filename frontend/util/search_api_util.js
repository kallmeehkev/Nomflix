export const fetchSearchResults = (search) => (
    $.ajax({
        method: 'GET',
        url: 'api/search',
        data: { search }
    })
)