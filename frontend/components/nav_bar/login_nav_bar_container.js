import { connect } from 'react-redux';
import NavBar from './nav_bar'
import {login} from '../../actions/session_actions'

const msp = ({entities, session}) => ({
    currentUser: entities.users[session.id],
    navType: 'login'
})

const mdp = dispatch => ({
})

export default connect(msp, mdp)(NavBar)