import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from './gallery_show_row_container';

class GalleryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let genresArr = Object.values(this.props.genres);
            let genresArrlimit6 = genresArr.filter( (genre, i) => i < 6) 
            let showRowsFirstSix = genresArrlimit6.map( (genre) => {
                return <GalleryShowRowContainer genre={genre} key={genre.id}/> 
            })
            let showOneRow = <GalleryShowRowContainer genre={this.props.genres[4]} key={1} />
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Gallery frontpage vid</div> 
                    {showRowsFirstSix}
                    {/* {showOneRow} */}
                </div>
            )
        } else {
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Gallery frontpage vid</div>
                    Gallery Index
                </div>
            )
        }
    }
}
export default GalleryIndex;