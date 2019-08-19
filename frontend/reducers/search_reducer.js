import { merge } from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const searchReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            newState = Object.keys(action.results);
            return newState;
        default:
            return oldState;
    }
}

export default searchReducer;