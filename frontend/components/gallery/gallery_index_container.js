import { connect } from 'react-redux';
import GalleryIndex from './gallery_index';
import { fetchMedia } from '../../actions/medium_actions';
import * as Selectors from '../../reducers/selectors';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchMediaGenres } from '../../actions/media_genre_actions';

const msp = state => {
    // let firstTenVideos = (Selectors.firstTenVideos(state)[0]) ? Selectors.firstTenVideos(state) : Selectors.defaultTenVideos(state)
    let firstSixGenresMedia = [];
    //may want to refactor gallery show row to have its own container
    //each show row should do the fetch for videos of a genre
    //so each show row has an array of videos for that genre
    return {
    // firstTenVideos: firstTenVideos,
    genres: state.entities.genres,
    firstGenreMedia: Selectors.genreMedia(state, 1)
    }
}

const mdp = dispatch => ({
    fetchMedia: () => dispatch(fetchMedia()),
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
    fetchGenre: (id) => dispatch(fetchGenre(id))
})

export default connect(msp, mdp)(GalleryIndex);