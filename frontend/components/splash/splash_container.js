import { connect } from 'react-redux';
import SplashIndex from './splash_index'
import { logout } from '../../actions/session_actions'

const msp = ({ entities, session }) => ({
})

const mdp = dispatch => ({
})

export default connect(msp, mdp)(SplashIndex)