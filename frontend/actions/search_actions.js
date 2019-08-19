import * as searchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveSearchResults = results => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
})

export const receiveSearchErrors = errors => ({
    type: RECEIVE_SEARCH_ERRORS,
    errors
})

export const fetchSearchResults = input => dispatch => (
    searchApiUtil.fetchSearchResults(input)
        .then(  results => dispatch(receiveSearchResults(results)),
                errors => dispatch(receiveSearchErrors(Object.values(errors.responseJSON)))
                )
)