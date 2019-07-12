import React from 'react'
import { Link } from 'react-router-dom';

const GalleryShowRowItemContent = props => {
    const style = {
        backgroundImage: 'url(' + props.content.thumbnailUrl + ')',
    };
    return (
        <div className="item_content_container">
            <div className="item_content_details">
                <div className="item_content_title">{props.content.title}</div>
                <div className="item_content_MR_duration">
                    <div className="item_content_MR">{props.content.maturityRating}</div>
                    <div className="item_content_duration">{Math.floor(props.content.duration / 60000)}m</div>
                </div>
                <div className="item_content_description">{props.content.description}</div>
                <div>
                    <div className="item_content_play_button_container"><Link to={`/watch/${props.content.id}`}>
                        <div className="item_content_play_button"><i className="fas fa-play"></i></div><div className="item_content_play_button_text">Play</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="item_content_gradient"></div>
            <div className="item_content_image" style={style}>
                <Link to={`/watch/${props.content.id}`}><div className="link"></div></Link>
                <button onClick={props.handleClose}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

export default GalleryShowRowItemContent;