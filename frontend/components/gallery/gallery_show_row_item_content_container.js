import { connect } from 'react-redux';
import GalleryShowItemContent from './gallery_show_row_item_content';
import { createMyList, deleteMyList } from '../../actions/my_list_actions';

const msp = (state, ownProps) => {
    let { content, handleClose } = ownProps;
    return {
        content: content,
        handleClose: handleClose
    }
}

const mdp = dispatch => ({
    createMyList: (myList) => dispatch(createMyList(myList)),
    deleteMylist: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryShowItemContent);