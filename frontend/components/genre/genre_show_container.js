import { connect } from 'react-redux';
import * as Selectors from '../../reducers/selectors';
import GenreShow from './genre_show';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchMediaGenres } from '../../actions/media_genre_actions';

const msp = (state, ownProps) => {
    return {
        genres: state.entities.genres,
        mediaGenres: state.entities.mediaGenres,
        genre: state.entities.genres[ownProps.match.params.genreId],
        // genreVideos: Selectors.genreVideos(state, ownProps.match.params.genreId),
    }
    //need children components to render page after genres and mediaGenres have been fetched
}

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
    fetchGenre: (id) => dispatch(fetchGenre(id)),
})

export default connect(msp, mdp)(GenreShow);