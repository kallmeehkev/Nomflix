import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const searchReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            newState = Object.keys(action.results);
            return newState;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return oldState;
    }
}

export default searchReducer;