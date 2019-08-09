import {merge} from 'lodash';
import { RECEIVE_MYLIST, REMOVE_MYLIST } from '../actions/my_list_actions';
import {RECEIVE_PROFILE} from '../actions/profile_actions';
const myListsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch(action.type) {
        case RECEIVE_PROFILE:
            if (action.payload.myLists) return action.payload.myLists;
            return oldState;
        case RECEIVE_MYLIST:
            newState[action.myList.id] = action.myList;
        case REMOVE_MYLIST:
            delete (newState[action.myListId]);
            return newState;
        default:
            return oldState;
    }
}

export default myListsReducer;