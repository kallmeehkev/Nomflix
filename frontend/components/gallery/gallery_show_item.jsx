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
    const style = {
        backgroundImage: 'url(' + video.thumbnailUrl + ')',
    };

    return (
        <div className="browse_row_item_container">
                <div className="browse_row_item_content" style={style}>
                    {/* <div className="a"></div> */}
                    <div className="b"><Link to={`/watch/${video.id}`}><div className="browse_row_item_link"></div></Link></div>
                    {/* <div className="c"></div> */}
                    {/* <img src={video.thumbnailUrl}/> */}
                </div>
        </div>
    )
}

export default GalleryShowItem;