import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SessionPage from './session_form/session_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GalleryIndexContainer from './gallery/gallery_index_container';
import SplashContainer from './splash/splash_container';
import MediaShowContainer from './watch/media_show_container';
import GenreShowContainer from './genre/genre_show_container';
import MyListIndexContainer from './mylist/mylist_index_container';
import GalleryNavBarContainer from './nav_bar/gallery_nav_bar_container';
import SearchPageIndexContainer from './search_page/search_page_index_container';

class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
    }

    render() {
        if (this.props.media[12] || this.props.mediaGenres[140]) {
            let {genres, mediaGenres} = this.props;
            let loggedInNavBar = this.props.currentUser ? <GalleryNavBarContainer /> : null;
            return (
                <div>
                    {loggedInNavBar}
                    <Switch>
                        <AuthRoute exact path="/" component={SplashContainer} />
                        <AuthRoute exact path="/login" component={SessionPage} />
                        <AuthRoute exact path="/signup" component={SessionPage} />
                        <ProtectedRoute path="/watch/:mediaId" component={MediaShowContainer} />
                        <ProtectedRoute path="/browse/genre/:genreId" component={GenreShowContainer} />
                        <ProtectedRoute exact path="/browse" component={GalleryIndexContainer} />
                        <ProtectedRoute exact path="/browse/my-list" component={MyListIndexContainer} />
                        <ProtectedRoute exact path="/search" component={SearchPageIndexContainer} />
                        <Route render={() => (<Redirect to="/browse" />)} />
                    </Switch>
                </div>
            )
        } 
        
        else {
            return (
                <div>
                    Welcome to Nomflix
                </div>
            )
        }
            
    }
}

export default Browse