import { connect } from 'react-redux';
import { fetchMedium } from '../../actions/medium_actions';
import * as Selectors from '../../reducers/selectors';
import GalleryFPVideo from './gallery_fp_video';

const msp = (state, ownProps) => {
    return {
        randFPVideo: state.entities.media[Selectors.randGenreVideoId(state, ownProps.genreId)] || {id: 0},
        pageType: ownProps.pageType,
        browseVid: ownProps.browseVid || { id: 0 },
        genre: state.entities.genres[ownProps.genreId]
    }
}

const mdp = dispatch => ({
    fetchMedium: (id) => dispatch(fetchMedium(id))
})

export default connect(msp, mdp)(GalleryFPVideo);