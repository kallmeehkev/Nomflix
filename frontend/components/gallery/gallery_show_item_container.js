import { connect } from 'react-redux';
import GalleryShowItem from './gallery_show_item';
import { createMyList, deleteMyList } from '../../actions/my_list_actions';

const msp = (state, ownProps) => {
    let { video, handleOpen, active } = ownProps;
    return {
        video: video,
        handleOpen: handleOpen,
        active: active,
        profileId: state.ui.currentProfileId,
        addedToMyList: !!state.entities.myLists[video.id],
    }
}

const mdp = dispatch => ({
    createMyList: (myList) => dispatch(createMyList(myList)),
    deleteMylist: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryShowItem);