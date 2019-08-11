import { connect } from 'react-redux';
import GalleryShowItem from './gallery_show_item';
import { createMyList, deleteMyList } from '../../actions/my_list_actions';
import { myListsHashByMediaId } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    let { video, handleOpen, active } = ownProps;
    return {
        video: video,
        handleOpen: handleOpen,
        active: active,
        profileId: state.ui.currentProfileId,
        addedToMyList: !!myListsHashByMediaId(state)[video.id],
        myList: myListsHashByMediaId(state)[video.id] || {}
    }
}

const mdp = dispatch => ({
    createMyList: (myList) => dispatch(createMyList(myList)),
    deleteMyList: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryShowItem);