import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';

class GalleryIndex extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="browse_body">
                <GalleryNavBarContainer />
                
                <div className="huge">Gallery</div> 
            </div>
        )
    }
}
export default GalleryIndex;