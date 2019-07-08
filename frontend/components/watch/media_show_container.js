import { connect } from 'react-redux';
import MediaShow from './media_show';
import { fetchMedium } from '../../actions/medium_actions';

const msp = (state, ownProps) => ({
    video: state.entities.media[ownProps.match.params.mediaId] || {}
})

const mdp = (dispatch, ownProps) => ({
    fetchMedium: (id) => dispatch(fetchMedium(id)) 
})

export default connect(msp, mdp)(MediaShow);
