import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from './gallery_show_row_container.js';
import GalleryFPVideoContainer from './gallery_fp_video_container';

class GalleryIndex extends React.Component {
    componentDidMount() {
        // this.props.fetchGenres();
        // this.props.fetchMediaGenres();
        this.props.fetchMedium(14);
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let genresArr = Object.values(this.props.genres);
            let genresArrlimit6 = genresArr.filter( (genre, i) => i < 6) 
            let showRowsFirstSix = genresArrlimit6.map( (genre) => {
                return <GalleryShowRowContainer genre={genre} key={genre.id} pageType="genre"/> 
            })
            let showOneRow = <GalleryShowRowContainer genre={this.props.genres[4]} key={1} />
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer path={this.props.match.path}/>
                    <GalleryFPVideoContainer genreId={5} pageType="browse" browseVid={this.props.fpVideo} />

                    {showRowsFirstSix}
                    {/* {showOneRow} */}
                </div>
            )
        } else {
            return (
                <div className="browse_body">
                    {/* <GalleryNavBarContainer /> */}
                    <div className="browse_fp_video_container">Gallery frontpage vid</div>
                    Gallery Index
                </div>
            )
        }
    }
}
export default GalleryIndex;
