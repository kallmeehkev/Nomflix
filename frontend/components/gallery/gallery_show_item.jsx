import React from 'react'
import { Link } from 'react-router-dom';

class GalleryShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMouseInside: false
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }

    mouseEnter() {
        this.setState({ isMouseInside: true });
    }
    mouseLeave() {
        this.setState({ isMouseInside: false });
    }

    render() {
        let defaultVideo = {
            id: 0,
            description: "",
            title: "",
            duration: 0,
            maturityRating: "PG",
            thumbnailUrl: "",
            mediaUrl: ""
        }

        let video = this.props.video ? this.props.video : defaultVideo;
        const style = {
            backgroundImage: 'url(' + video.thumbnailUrl + ')',
        };

        return (
            <div className="browse_row_item_container">
                {/* <div className="side_block"></div> */}
                <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={"browse_row_item_content " + (this.state.isMouseInside ? 'browse_row_transform' : '')} style={style}>
                        <div className="b">
                            <Link to={`/watch/${video.id}`}>
                                <div className="browse_row_item_link">
                                    <div className="overlay_darken">
                                        <div className="row_item_overlay">
                                            <button></button>
                                            <div className="row_item_play_button"><i className="far fa-play-circle"></i></div>
                                            <div className="row_item_overlay_title">{video.title}</div>
                                            <div className="row_item_overlay_details">
                                                <div className="row_item_overlay_mat_rating">{video.maturityRating}</div>
                                                <div className="row_item_overlay_duration">{Math.floor(video.duration/60000)}m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                </div>
                {/* <div className="side_block"></div> */}
            </div>
        )
    }
}

export default GalleryShowItem;