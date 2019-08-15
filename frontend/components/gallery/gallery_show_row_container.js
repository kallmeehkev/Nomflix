import { connect } from 'react-redux';
import GalleryShowRow from './gallery_show_row';
import * as Selectors from '../../reducers/selectors';
import { fetchGenre } from '../../actions/genre_actions';

const msp = (state, ownProps) => {
    if (ownProps.pageType === "genre") {
        return {
            genreVideos: Selectors.genreVideos(state, ownProps.genre.id),
            genre: ownProps.genre,
            pageType: ownProps.pageType,
            myListVideos: [],
            rowActive: ownProps.rowActive,
            handleActiveRow: ownProps.handleActiveRow,
        }
    } else {
        return {
            genreVideos: [],
            myListVideos: ownProps.myListVideos,
            pageType: ownProps.pageType,
        }
    }
}

const mdp = dispatch => ({
    fetchGenre: (id) => dispatch(fetchGenre(id)),
})

export default connect(msp, mdp)(GalleryShowRow);