import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from '../gallery/gallery_show_row_container';
import GalleryFPVideoContainer from '../gallery/gallery_fp_video_container';
class GenreShow extends React.Component {

    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
        this.props.fetchGenre(this.props.match.params.genreId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.genreId !== this.props.match.params.genreId) {
            this.props.fetchGenre(this.props.match.params.genreId);
        }
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let showOneRow = <GalleryShowRowContainer genre={this.props.genre} key={1} genreShow={true}/>
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer path={this.props.match.path} />
                    <GalleryFPVideoContainer genreId={Number(this.props.match.params.genreId)} pageType="genreShow"/>
                    {showOneRow}
                </div>
            ) 
        }
        else {
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Genre frontpage vid</div>
                    Genre Show
                </div>
            )
        }   
    }
}

export default GenreShow;