import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Search from './search'
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';

const msp = (state, ownProps) => ({
    searchResults: state.entities.searchResults,
})

const mdp = dispatch => ({
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    clearSearchResults: () => dispatch(clearSearchResults()),
})

export default withRouter(connect(msp, mdp)(Search));