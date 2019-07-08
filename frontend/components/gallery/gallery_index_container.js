import { connect } from 'react-redux';
import GalleryIndex from './gallery_index';
import { fetchMedia } from '../../actions/medium_actions';
import * as Selectors from '../../reducers/selectors';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchMediaGenres } from '../../actions/media_genre_actions';

const msp = state => {
    //may want to refactor gallery show row to have its own container
    //each show row should do the fetch for videos of a genre
    //so each show row has an array of videos for that genre
    return {
    genres: state.entities.genres,
    mediaGenres: state.entities.mediaGenres
    }
}

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
})

export default connect(msp, mdp)(GalleryIndex);