import { connect } from 'react-redux';
import { fetchGenres, fetchGenre } from '../actions/genre_actions';
import { fetchMediaGenres } from '../actions/media_genre_actions';
import { withRouter } from "react-router";

import Browse from './Browse';

const msp = state => ({
    currentUser: state.session.id,
    media: state.entities.media,
    mediaGenres: state.entities.mediaGenres,
})

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
    fetchMediaGenres: () => dispatch(fetchMediaGenres()),
})

export default withRouter(connect(msp, mdp)(Browse));