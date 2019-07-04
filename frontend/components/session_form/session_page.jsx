import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './login_form_container';
import LoginNavBarContainer from '../nav_bar/login_nav_bar_container'
import SignupNavBarContainer from '../nav_bar/signup_nav_bar_container'
import SignupFormContainer from './signup_form_container';
import * as Images from '../images';

const LoginPage = props => {
    let background = <div></div>;
    let navbar = <div></div>
    if (props.match.path === '/login') {
        background = <div className="login_wrapper_background">
            <img src={Images.netflix_background_9_URL} />
        </div>;
        navbar = <LoginNavBarContainer />;
    } else {
        background = <div className="signup_wrapper"></div>;
        navbar = <SignupNavBarContainer />;
    }
    return (
        <div className="login_page_mount">
            <div className="login_page">
                {background}
                {navbar}
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
            </div>
        </div>
    );

}

export default LoginPage;