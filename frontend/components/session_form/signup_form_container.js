import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/errors_actions';
import { setCurrentProfile } from '../../actions/profile_actions'



const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign Up',
    currentUser: state.session.id
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    setCurrentProfile: (profileId) => dispatch(setCurrentProfile(profileId))
})

export default connect(msp, mdp)(SessionForm)