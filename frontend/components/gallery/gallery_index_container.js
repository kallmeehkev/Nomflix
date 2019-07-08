import { connect } from 'react-redux';
import GalleryIndex from './gallery_index'
import { fetchMedia } from '../../actions/medium_actions'

const msp = state => ({
    video1: state.entities.media[1] || {}
    
})

const mdp = dispatch => ({
    fetchMedia: () => dispatch(fetchMedia())
})

export default connect(msp, mdp)(GalleryIndex);