import React from 'react'
import { Link } from 'react-router-dom';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import GalleryShowRowContainer from '../gallery/gallery_show_row_container.js';

class MyListIndex extends React.Component {


    render() {
        let {videos} = this.props;
        let rows = [];
        let container = [];
        for(let i = 0; i < videos.length; i++) {
            if (container.length < 5) {
                container.push(videos[i])
            } else {
                rows.push(<GalleryShowRowContainer myListVideos={container} key={i} pageType="myList"/>)
                container = [];
            }
            if (i === videos.length - 1) {
                rows.push(<GalleryShowRowContainer myListVideos={container} key={i} pageType="myList"/>)
                container = [];
            }
        }
        debugger
        return (
            <div className="browse_body">
                <GalleryNavBarContainer path={this.props.match.path} />
                <div className="myList_index_title">My List</div>
                {rows}
            </div>
        )
    }
}

export default MyListIndex;