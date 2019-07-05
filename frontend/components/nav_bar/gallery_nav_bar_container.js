import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { unSetCurrentProfile } from '../../actions/profile_actions';

const msp = ({ entities, session, ui }) => ({
    currentUser: entities.users[session.id],
    navType: 'gallery',
    currentProfileId: ui.currentProfileId
})

const mdp = dispatch => ({
    logout: (user) => dispatch(logout(user)),
    unSetCurrentProfile: (profileId) => dispatch(unSetCurrentProfile(profileId))
})

export default connect(msp, mdp)(NavBar)