import React from 'react'
import { Link } from 'react-router-dom';

class GalleryShowRowItemContent extends React.Component {
    constructor(props) {
        super(props);
        this.addToMyList = this.addToMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
    }

    addToMyList() {
        this.props.createMyList({
            profile_id: this.props.profileId,
            media_id: this.props.content.id,
        });
    }

    removeFromMyList() {
        this.props.deleteMyList(this.props.myList.id);
    }

    render() {
        let {content, handleClose} = this.props;
        const style = {
            backgroundImage: 'url(' + content.thumbnailUrl + ')',
        };
        let addVideo = <div className="item_content_myList_button_container"><button onClick={this.addToMyList}>
            <div className="item_content_play_button"><i className="fas fa-plus"></i></div><div className="item_content_play_button_text">MY LIST</div></button></div>;
        let removeVideo = <div className="item_content_myList_button_container"><button onClick={this.removeFromMyList}>
            <div className="item_content_play_button"><i className="fas fa-check"></i></div><div className="item_content_play_button_text">MY LIST
            </div></button></div>;
        let myListStatus = this.props.addedToMyList ? removeVideo : addVideo;
        return (
            <div className="item_content_container">
                <div className="item_content_details">
                    <div className="item_content_title">{content.title}</div>
                    <div className="item_content_MR_duration">
                        <div className="item_content_MR">{content.maturityRating}</div>
                        <div className="item_content_duration">{Math.floor(content.duration / 60000)}m</div>
                    </div>
                    <div className="item_content_description">{content.description}</div>
                    <div className="item_content_buttons_container">
                        <div className="item_content_play_button_container"><Link to={`/watch/${content.id}`}>
                            <div className="item_content_play_button"><i className="fas fa-play"></i></div><div className="item_content_play_button_text">PLAY</div>
                            </Link>
                        </div>
                        {myListStatus}
                    </div>
                </div>
                <div className="item_content_gradient1"></div>
                <div className="item_content_gradient2"></div>
                <div className="item_content_gradient3"></div>
                <div className="item_content_gradient4"></div>
                <div className="item_content_gradient5"></div>
                <div className="item_content_image" style={style}>
                    <Link to={`/watch/${content.id}`}><div className="link"></div></Link>
                    <button onClick={handleClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default GalleryShowRowItemContent;