import { connect } from 'react-redux';
import { withRouter } from "react-router";
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { unSetCurrentProfile, fetchProfile } from '../../actions/profile_actions';

const msp = ({ entities, session, ui }) => ({
    currentUser: entities.users[session.id],
    navType: 'gallery',
    currentProfileId: ui.currentProfileId || 1,
    fetchedProfile: entities.profiles[ui.currentProfileId] || {},
    genres: Object.values(entities.genres)
})

const mdp = dispatch => ({
    logout: (user) => dispatch(logout(user)),
    unSetCurrentProfile: (profileId) => dispatch(unSetCurrentProfile(profileId)),
    fetchProfile: (profileId) => dispatch(fetchProfile(profileId))
})

export default withRouter(connect(msp, mdp)(NavBar));