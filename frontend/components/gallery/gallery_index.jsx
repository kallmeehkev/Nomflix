import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from './gallery_show_row_container';
import GalleryFPVideoContainer from './gallery_fp_video_container';
class GalleryIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGenres();
        this.props.fetchMediaGenres();
        this.props.fetchMedium(14);
        this.fadeOutEffect = this.fadeOutEffect.bind(this);
    }
    fadeOutEffect() {
            let fadeTarget = document.getElementsByClassName("browse_fp_video_description")[0];
            let fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.01;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 1);
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let genresArr = Object.values(this.props.genres);
            let genresArrlimit6 = genresArr.filter( (genre, i) => i < 6) 
            let showRowsFirstSix = genresArrlimit6.map( (genre) => {
                return <GalleryShowRowContainer genre={genre} key={genre.id}/> 
            })
            let showOneRow = <GalleryShowRowContainer genre={this.props.genres[4]} key={1} />
            let fpVideoStyle = {
                backgroundImage: 'url(' + this.props.fpVideo.thumbnailUrl + ')',
            };
            let description = document.getElementsByClassName("browse_fp_video_description")[0]
            if (description) {
                description.addEventListener('click', this.fadeOutEffect);
            }
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer path={this.props.match.path}/>
                    <GalleryFPVideoContainer genreId={5} pageType="browse" browseVid={this.props.fpVideo} />

                    {/* {showRowsFirstSix} */}
                    {showOneRow}
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
