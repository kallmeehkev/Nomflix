import { connect } from 'react-redux';
import MyListIndex from '../mylist/mylist_index.jsx';
import * as Selectors from '../../reducers/selectors';

const msp = (state, ownProps) => {
    return {
        videos: Selectors.searchResultVideos(state),
        pageType: "search"
    }
}

const mdp = dispatch => ({
})

export default connect(msp, mdp)(MyListIndex);