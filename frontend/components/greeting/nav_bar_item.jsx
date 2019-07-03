import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = props => {
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

export default NavBarItem;