import React from 'react'
import GalleryShowItem from './gallery_show_item'

const GalleryShowRow = props => {
    let videos = props.firstGenreMedia.map( (video, i) => {
        // debugger
        return <GalleryShowItem video={video} key={i}/>
    })
    return (
        <div className="browse_row_container">
            <h2><span className="browse_row_title"><div>{props.genres[1].name}</div></span></h2>
            <div className="browse_row_content">
                <div className="browse_row_slider">
                    <div className="browse_row_slider_wrapper">
                        {videos}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryShowRow;