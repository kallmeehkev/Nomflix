import { connect } from 'react-redux';
import MyListIndex from './mylist_index';
import { deleteMyList } from '../../actions/my_list_actions';

const msp = (state, ownProps) => {
    return {
        myLists: state.entities.myLists,
    }
}

const mdp = dispatch => ({
    deleteMylist: (id) => dispatch(deleteMyList(id)),
})

export default connect(msp, mdp)(MyListIndex);