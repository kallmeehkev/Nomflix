import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import MediaShowContainer from '../watch/media_show_container';
import { Link } from 'react-router-dom';

class GalleryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchMedia();
    }

    render() {
        // debugger
        return (
            <div className="browse_body">
                <GalleryNavBarContainer />
                <div className="huge">Gallery
                <Link to={`/watch/${this.props.video1.id}`}><img src={this.props.video1.thumbnailUrl} /></Link>           
                </div> 
            </div>
        )
    }
}
export default GalleryIndex;