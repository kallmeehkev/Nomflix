import React from 'react'
import { Link } from 'react-router-dom';
const GalleryShowItem = props => {
    let defaultVideo = {
        id: 0,
        description: "",
        title: "",
        duration: 0,
        maturityRating: "PG",
        thumbnailUrl: "",
        mediaUrl: ""
    }
    let video = props.video ? props.video : defaultVideo;
    return (
        <div className="browse_row_item">
            <Link to={`/watch/${video.id}`}><div className="browse_row_item_content"><img src={video.thumbnailUrl}/></div></Link>
        </div>
    )
}

export default GalleryShowItem;