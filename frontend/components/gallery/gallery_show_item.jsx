import React from 'react'
import { Link } from 'react-router-dom';

class GalleryShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.addToMyList = this.addToMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    addToMyList() {
        this.props.createMyList({
            profile_id: this.props.profileId,
            media_id: this.props.video.id,
        });
    }

    removeFromMyList() {
        this.props.deleteMyList(this.props.myList.id);
    }

    handleOpen() {
        this.props.handleOpen();
        this.props.handleActiveRow();
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
        let backgroundImage = this.props.hoverOff ? 
            {
                transform: 'scale(1.0)',
                backgroundImage: 'url(' + video.thumbnailUrl + ')',
            }
        :
            {
                backgroundImage: 'url(' + video.thumbnailUrl + ')',
            };
        let addVideo = <button onClick={this.addToMyList}>
            <div className="myList_button"><i className="fas fa-plus-circle"></i>
                <div className="myList_status_dropdown">ADD TO MY LIST</div>
            </div></button>;
        let removeVideo = <button onClick={this.removeFromMyList}>
            <div className="myList_button"><i className="far fa-check-circle"></i>
                <div className="myList_status_dropdown">REMOVE FROM MY LIST</div>
            </div></button>;
        let myListStatus = this.props.addedToMyList ? removeVideo : addVideo;
        return (
            <div className={`browse_row_item_container ${this.props.active}`} style={this.props.translate}>
                <div onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} className="browse_row_item_content" style={backgroundImage}>
                        <div className="b">
                            <Link to={`/watch/${video.id}`}>
                                <div className="browse_row_item_link">
                                    <div className="overlay_darken">
                                        <div className="row_item_overlay">
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
                            <div className="myList_container">
                                {myListStatus}
                            </div>
                        </div>
                        <button onClick={this.handleOpen} className="row_item_drop_down"><i className="fas fa-chevron-down"></i></button>
                </div>
                <div className="row_item_border_arrow"><i className="fas fa-caret-down"></i></div>
            </div>
        )
    }
}

export default GalleryShowItem;