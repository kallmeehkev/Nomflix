import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import LoginNavBarContainer from '../nav_bar/login_nav_bar_container'

const LoginPage = props => {

    return (
        <div className="login_page_mount">
            <div className="login_page">
                <div className="login_wrapper_background">
                    <img src="https://www.backgroundcheckall.com/wp-content/uploads/2017/12/netflix-background-9.jpg"/>
                </div>
                <LoginNavBarContainer />
                <LoginFormContainer />
            </div>
        </div>
    );
}

export default LoginPage;