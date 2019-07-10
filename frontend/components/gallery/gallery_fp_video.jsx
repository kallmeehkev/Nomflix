import React from 'react'
import { Link } from 'react-router-dom';

class GalleryFPVideo extends React.Component {

    componentDidMount() {
        this.props.fetchMedium(this.props.genreId)
    }

    render() {
        if (this.props.fpVideo.id !== 0) {
            let fpVideoStyle = {
                backgroundImage: 'url(' + this.props.fpVideo.thumbnailUrl + ')',
            };
            return (
                <div className="browse_fp_video_container">
                    <div className="browse_fp_video" style={fpVideoStyle}><div className="browse_fp_background_gradient"></div></div>
                    <span className="browse_fp_video_maturity_rating">
                        <span className="browse_fp_video_maturity_rating_text">{this.props.fpVideo.maturityRating}</span>
                    </span>
                    <div className="browse_fp_video_side_section">
                        <div className="browse_side_section_controls">
                            <div className="browse_fp_video_title">
                                {this.props.fpVideo.title}
                            </div>
                            <span className="play_button_container"><div className="link"><Link to={`/watch/${this.props.fpVideo.id}`}>
                                <div className="play_button"></div><div className="play_button_text">Play</div></Link></div>
                                <div></div>
                            </span>
                            <div className="browse_fp_video_description" onLoad={this.fadeOut}>
                                {this.props.fpVideo.description}
                            </div>
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