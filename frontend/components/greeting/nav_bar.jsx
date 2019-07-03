import React from 'react';
import { Link } from 'react-router-dom';
import NavBarItem from './nav_bar_item'

const NavBar = props => {
    if (props.currentUser) {
        return (
            <div>
                Welcome {props.currentUser.username}
                <button onClick={() => props.logout(props.currentUser)}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default NavBar;