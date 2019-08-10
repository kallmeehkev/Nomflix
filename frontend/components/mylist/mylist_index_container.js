import { connect } from 'react-redux';
import MyListIndex from './mylist_index.jsx';
import { deleteMyList } from '../../actions/my_list_actions';
import * as Selectors from '../../reducers/selectors';

const msp = (state, ownProps) => {
    return {
        videos: Selectors.myListsVideos(state),
    }
}

const mdp = dispatch => ({
    deleteMylist: (id) => dispatch(deleteMyList(id)),
})

export default connect(msp, mdp)(MyListIndex);