export const createMyList = (myList) => (
    $.ajax({
        method: 'POST',
        url: `api/my_lists`,
        data: { my_list: myList }
    })
)

export const deleteMyList = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/my_lists/${id}`,
        // data: { id }
    })
)