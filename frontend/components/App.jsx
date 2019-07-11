import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SessionPage from './session_form/session_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GalleryIndexContainer from './gallery/gallery_index_container';
import SplashContainer from './splash/splash_container';
import MediaShowContainer from './watch/media_show_container';
import GenreShowContainer from './genre/genre_show_container';
import BrowseContainer from './Browse_container';

const App = () => (
    <div>
        <BrowseContainer />
    </div>
);

export default App;