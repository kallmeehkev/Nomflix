import React from 'react';
import SplashNavBarContainer from './nav_bar/splash_nav_bar_container';
import { Switch, Route, Redirect } from 'react-router';
import SessionPage from './session_form/session_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GalleryIndexContainer from './gallery/gallery_index_container';
import SplashContainer from './splash/splash_container';

const App = () => (
    <div>
        <AuthRoute exact path="/" component={SplashContainer} />

        <AuthRoute exact path="/login" component={SessionPage} />
        <AuthRoute exact path="/signup" component={SessionPage} />
        
        <ProtectedRoute path="/browse" component={GalleryIndexContainer} />
    </div>
);

export default App;