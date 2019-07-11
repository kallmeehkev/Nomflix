import React from 'react'
import { Link } from 'react-router-dom';
import * as Selectors from '../../reducers/selectors';


class GalleryFPVideo extends React.Component {

    
    render() {
        if (this.props.randFPVideo.id !== 0 || this.props.browseVid.id !== 0) {
            let video = this.props.pageType === 'genreShow' ? this.props.randFPVideo : this.props.browseVid
            let fpVideoStyle = { backgroundImage: 'url(' + video.thumbnailUrl + ')' };
            let genreTag = "";
            if (this.props.pageType === 'genreShow') {
                genreTag = (<div className="genre_tag_container">
                    <div className="genre_tag_text">Genre</div>
                    <div className="genre_tag_arrow"><i className="fas fa-angle-right"></i></div>
                    <div className="genre_tag_title">{this.props.genre.name}</div>
                    </div>)
            }
            return (
                <div className="browse_fp_video_container">
                    <div className="browse_fp_video" style={fpVideoStyle}><div className="browse_fp_background_gradient"></div></div>
                    <span className="browse_fp_video_maturity_rating">
                        <span className="browse_fp_video_maturity_rating_text">{video.maturityRating}</span>
                    </span>
                    {genreTag}
                    <div className="browse_fp_video_side_section">
                        <div className="browse_side_section_controls">
                            <div className="browse_fp_video_title">
                                {video.title}
                            </div>
                            <span className="play_button_container"><div className="link"><Link to={`/watch/${video.id}`}>
                                <div className="play_button"><i className="fas fa-play"></i></div><div className="play_button_text">Play</div></Link></div>
                                <div></div>
                            </span>
                            <p className="browse_fp_video_description" onLoad={this.fadeOut}>
                                {video.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    fpVideoShow
                </div>
            )
        }
    }
}

export default GalleryFPVideo;