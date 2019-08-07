import { connect } from 'react-redux';
import GalleryShowItem from './gallery_show_item';
import { deleteMyList } from '../../actions/my_list_actions';

const msp = (state, ownProps) => {
    let { video, handleOpen, active } = ownProps;
    return {
        video: video,
        handleOpen: handleOpen,
        active: active,
    }
}

const mdp = dispatch => ({
    deleteMylist: (id) => dispatch(deleteMyList(id))
})

export default connect(msp, mdp)(GalleryShowItem);