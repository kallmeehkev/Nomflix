import { connect } from 'react-redux';
import GalleryIndex from './gallery_index';
import * as Selectors from '../../reducers/selectors';
import { fetchMedia, fetchMedium } from '../../actions/medium_actions';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchMediaGenres } from '../../actions/media_genre_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        genres: state.entities.genres,
        mediaGenres: state.entities.mediaGenres,
        fpVideo: state.entities.media[14] || {},
        currentProfileId: state.ui.currentProfileId,
        modal: state.ui.modal
    }
}

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
    fetchMedium: (id) => dispatch(fetchMedium(id)),
    openModal: (type) => dispatch(openModal(type)),
})

export default connect(msp, mdp)(GalleryIndex);