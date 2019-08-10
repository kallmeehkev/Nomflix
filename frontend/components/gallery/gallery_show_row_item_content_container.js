import { connect } from 'react-redux';
import GalleryShowItemContent from './gallery_show_row_item_content';
import { createMyList, deleteMyList } from '../../actions/my_list_actions';
import { myListsHashByMediaId } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    let { content, handleClose } = ownProps;
    return {
        content: content,
        handleClose: handleClose,
        addedToMyList: !!myListsHashByMediaId(state)[content.id],
        myList: myListsHashByMediaId(state)[content.id] || {},
        profileId: state.ui.currentProfileId,
    }
}

const mdp = dispatch => ({
    createMyList: (myList) => dispatch(createMyList(myList)),
    deleteMyList: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryShowItemContent);