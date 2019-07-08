import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRow from './gallery_show_row';

class GalleryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
        this.props.fetchGenre(1);
        this.props.fetchGenre(2);
        this.props.fetchGenre(3);
        this.props.fetchGenre(4);
        this.props.fetchGenre(5);
        this.props.fetchGenre(6);
    }

    render() {
        if (this.props.firstGenreMedia[0]) {
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Gallery frontpage vid</div> 
                    {/* <Link to={`/watch/${this.props.video1.id}`}><img src={this.props.video1.thumbnailUrl} /></Link>            */}
                    <GalleryShowRow firstGenreMedia={this.props.firstGenreMedia} genres={this.props.genres}/> 
                </div>
            )
        } else {
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Gallery frontpage vid</div>
                </div>
            )
        }
    }
}
export default GalleryIndex;