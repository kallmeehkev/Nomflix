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
        if (props.navType === 'splash') {//not logged in and on splash page
            return (
                <div className="splash_nav_bar_container">
                    <div className="splash_nav_bar_header">
                        <span className="splash_logo">NOMFLIX</span>
                        <span class="authLink login"><Link to="/login">Log In</Link></span>
                    </div>
                </div>
            )
        } else { //not logged in and on login page
            return (
                <div className="login_nav_bar_container">
                    <div className="login_nav_bar_header">
                        <span className="login_splash_logo"><Link to="/">NOMFLIX</Link></span>
                    </div>
                </div>
            )
        }
    }
}

export default NavBar;