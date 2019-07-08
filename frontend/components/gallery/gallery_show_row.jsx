import React from 'react'
import GalleryShowItem from './gallery_show_item'

class GalleryShowRow extends React.Component {
        
    componentDidMount() {
        this.props.fetchGenre(this.props.genre.id)
    }
        
    render() {
        if (this.props.genreVideos[this.props.genreVideos.length-1]) {
            // console.log(this.props.genreVideos)
            // console.log(this.props.genre)
            let videos = this.props.genreVideos.map((video, i) => {
                return <GalleryShowItem video={video} key={i + (this.props.genre.id * 10)} />
            })
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title"><div>{this.props.genre.name}</div></span></h2>
                    <div className="browse_row_content">
                        {/* <div className="browse_row_slider"> */}
                            <div className="browse_row_slider_wrapper">
                                {videos}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    GalleryShowRow
                </div>
            )
        }
    }
}

export default GalleryShowRow;