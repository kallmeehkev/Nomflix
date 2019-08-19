import { connect } from 'react-redux';
import Search from './search'
import { fetchSearchResults } from '../../actions/search_actions';

const msp = (state, ownProps) => ({
    searchResults: state.entities.searchResults,
})

const mdp = dispatch => ({
    fetchSearchResults: input => dispatch(fetchSearchResults(input))
})

export default connect(msp, mdp)(Search)