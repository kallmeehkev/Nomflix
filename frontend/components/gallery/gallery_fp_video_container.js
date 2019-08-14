import { connect } from 'react-redux';
import { fetchMedium } from '../../actions/medium_actions';
import * as Selectors from '../../reducers/selectors';
import { myListsHashByMediaId } from '../../reducers/selectors';
import GalleryFPVideo from './gallery_fp_video';
import { createMyList, deleteMyList } from '../../actions/my_list_actions';

const msp = (state, ownProps) => {
    return {
        randId: Selectors.randGenreVideoId(state, ownProps.genreId) || 0,
        // randFPVideo: state.entities.media[Selectors.randGenreVideoId(state, ownProps.genreId)] || {id: 0},
        pageType: ownProps.pageType,
        browseVid: ownProps.browseVid || { id: 0 },
        genre: state.entities.genres[ownProps.genreId],
        media: state.entities.media,
        myListsHashByMediaId: myListsHashByMediaId(state),
        profileId: state.ui.currentProfileId,
    }
}

const mdp = dispatch => ({
    fetchMedium: (id) => dispatch(fetchMedium(id)),
    createMyList: (myList) => dispatch(createMyList(myList)),
    deleteMyList: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryFPVideo);