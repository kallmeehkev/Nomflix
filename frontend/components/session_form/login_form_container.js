import { connect } from 'react-redux';
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { setCurrentProfile } from '../../actions/profile_actions'
import {clearSessionErrors} from '../../actions/errors_actions'

const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Log In',
    currentUser: state.session.id
})

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    setCurrentProfile: (profileId) => dispatch(setCurrentProfile(profileId))
})

export default connect(msp, mdp)(SessionForm)
