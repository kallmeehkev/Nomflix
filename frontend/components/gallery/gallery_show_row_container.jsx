import { connect } from 'react-redux';
import GalleryShowRow from './gallery_show_row';
import * as Selectors from '../../reducers/selectors';
import { fetchGenre } from '../../actions/genre_actions';

const msp = (state, ownProps) => {
    return {
        genreVideos: Selectors.genreVideos(state, ownProps.genre.id),
        genre: ownProps.genre
    }
}

const mdp = dispatch => ({
    fetchGenre: (id) => dispatch(fetchGenre(id))
})

export default connect(msp, mdp)(GalleryShowRow);