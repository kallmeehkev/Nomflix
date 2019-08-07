import * as myListApiUtil from '../util/my_list_api_util';

export const RECEIVE_MYLIST = "RECEIVE_MYLIST";
export const RECEIVE_MYLIST_ERRORS = "RECEIVE_MYLIST_ERRORS";
export const REMOVE_MYLIST = "REMOVE_MYLIST";

export const receiveMyList = myList => ({
    type: RECEIVE_MYLIST,
    myList
})

export const receiveMyListErrors = errors => ({
    type: RECEIVE_MYLIST_ERRORS,
    errors
})

export const removeMyList = myListId => ({
    type: REMOVE_MYLIST,
    myListId
})

export const createMyList = myList => dispatch => (
    myListApiUtil.createMyList(myList)
        .then(
            myList => dispatch(receiveMyList(myList)), 
            errors => dispatch(receiveMyListErrors(lues(errors.responseJSON)))
        )
)

export const deleteMyList = id => dispatch => (
    myListApiUtil.deleteMyList(id)
        .then(
            myList => dispatch(removeMyList(myList.id)),
            errors => dispatch(receiveMyListErrors(lues(errors.responseJSON)))
        )
)