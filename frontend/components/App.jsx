import React from 'react';
import NavBarContainer from './greeting/nav_bar_container';
import { Route, Redirect } from 'react-router';
import LoginFormContainer from './greeting/login_form_container';
import SignupFormContainer from './greeting/signup_form_container'
import { AuthRoute } from '../util/route_util'
const App = () => (
    <div>
        <header>
            <h1>Wet Wet Wetflix</h1>
            <div className="navbar"><Route exact path="/" component={NavBarContainer} /></div>
            
        </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;