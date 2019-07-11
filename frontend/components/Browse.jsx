import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SessionPage from './session_form/session_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GalleryIndexContainer from './gallery/gallery_index_container';
import SplashContainer from './splash/splash_container';
import MediaShowContainer from './watch/media_show_container';
import GenreShowContainer from './genre/genre_show_container';


class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.media
    }

    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
        this.setState(this.props.media)
    }

    render() {
        if (this.props.media[12] || this.props.mediaGenres[140]) {
            let {genres, mediaGenres} = this.props;
            return (
                <div>
                    <Switch>
                        <AuthRoute exact path="/" component={SplashContainer} />
                        <AuthRoute exact path="/login" component={SessionPage} />
                        <AuthRoute exact path="/signup" component={SessionPage} />
                        <ProtectedRoute path="/watch/:mediaId" component={MediaShowContainer} />
                        <ProtectedRoute path="/browse/genre/:genreId" component={GenreShowContainer} />
                        <ProtectedRoute exact path="/browse" component={GalleryIndexContainer} />
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