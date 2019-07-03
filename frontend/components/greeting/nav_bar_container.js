import { connect } from 'react-redux';
import NavBar from './nav_bar'
import {logout} from '../../actions/session_actions'

const msp = ({entities, session}) => ({
    currentUser: entities.users[session.id]
})

const mdp = dispatch => ({
    logout: (user) => dispatch(logout(user))
})

export default connect(msp, mdp)(NavBar)