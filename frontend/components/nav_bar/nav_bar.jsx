import React from 'react';
import { Link } from 'react-router-dom';
import NavBarIcon from './nav_bar_icon'

const NavBar = props => {
    if (props.currentUser) { //logged in
        return (
            <div className="home_nav_bar_container">
                <button onClick={() => props.logout(props.currentUser)}>Log Out</button>
            </div>
        )
    } else {
        switch (props.navType) {
            case 'login':
                return (
                    <div className="login_nav_bar_container">
                        <div className="login_nav_bar_header">
                            <span><Link to="/"><img src="https://fontmeme.com/permalink/190703/a61ac8e10ea54d68646d1a85e71642ed.png" className="login_splash_logo" /></Link></span>
                        </div>
                    </div>
                )
            case 'signup':
                return (
                    <div className="signup_nav_bar_container">
                        <div className="login_nav_bar_header">
                            <span><Link to="/"><img src="https://fontmeme.com/permalink/190703/a61ac8e10ea54d68646d1a85e71642ed.png" className="login_splash_logo" /></Link></span>
                        </div>
                        <Link to="/login"><span className='signup_redirect'>Log In</span></Link>
                    </div>
                )
            default: //just the splash nav
                return (
                    <div className="splash_nav_bar_container">
                        <div className="splash_nav_bar_header">
                            <span><img src="https://fontmeme.com/permalink/190703/a61ac8e10ea54d68646d1a85e71642ed.png" className="splash_logo" /></span>
                            <span><Link to="/login"><span class="authLink login">Log In</span></Link></span>
                        </div>
                    </div>
                )
        }
    }
}

export default NavBar;