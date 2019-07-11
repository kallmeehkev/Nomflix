import React from 'react'
import { Link } from 'react-router-dom';
import * as Selectors from '../../reducers/selectors';


class GalleryFPVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.randFPVideo;
    }

    render() {
        if (this.props.randFPVideo.id !== 0 || this.props.browseVid.id !== 0) {
            let video = this.props.pageType === 'genreShow' ? this.state : this.props.browseVid
            let fpVideoStyle = { backgroundImage: 'url(' + video.thumbnailUrl + ')' };
            return (
                <div className="browse_fp_video_container">
                    <div className="browse_fp_video" style={fpVideoStyle}><div className="browse_fp_background_gradient"></div></div>
                    <span className="browse_fp_video_maturity_rating">
                        <span className="browse_fp_video_maturity_rating_text">{video.maturityRating}</span>
                    </span>
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