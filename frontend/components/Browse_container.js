import { connect } from 'react-redux';
import { fetchGenres, fetchGenre } from '../actions/genre_actions';
import { fetchMediaGenres } from '../actions/media_genre_actions';
import Browse from './Browse';

const msp = state => ({
    media: state.entities.media,
    mediaGenres: state.entities.mediaGenres,
})

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
})

export default connect(msp, mdp)(Browse);