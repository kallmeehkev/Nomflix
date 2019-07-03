import React from 'react';
import splashNavBarContainer from './nav_bar/splash_nav_bar_container';
import { Switch, Route, Redirect } from 'react-router';
import LoginPage from './session_form/login_page'
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GalleryIndexContainer from './gallery/gallery_index_container';

const App = () => (
    <div>
        <div className="splash_container">
            <header >
                <Route exact path="/"component={splashNavBarContainer} />
            </header>
            <h1 className="temp_title"><Route exact path="/" render={() => <div>Nom Nom Nomflix</div>} /></h1>
            {/* <div>
            <span><Link to="/signup">Sign Up</Link></span>
        </div> */}
            {/* need a container to render sign up on splash page*/}
        </div>
        <div className="login_page_mount">
            <div className="login_page"><AuthRoute exact path="/login" component={LoginPage} /></div>
        </div>

        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <div>
            <ProtectedRoute exact path="/browse" component={GalleryIndexContainer} />
        </div>
    </div>
);

export default App;