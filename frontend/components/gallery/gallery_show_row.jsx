import React from 'react'
import GalleryShowItem from './gallery_show_item'

class GalleryShowRow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     isMouseInside: false
        // }
        // this.mouseEnter = this.mouseEnter.bind(this)
        // this.mouseLeave = this.mouseLeave.bind(this)
    }    

    componentDidMount() {
        if (this.props.genreVideos[0].duration === 0) {
            this.props.fetchGenre(this.props.genre.id)
        }
    }
        
    // mouseEnter() {
    //     this.setState({ isMouseInside: true });
    // }
    // mouseLeave() {
    //     this.setState({ isMouseInside: false });
    // }

    render() {
        if (this.props.genreVideos[this.props.genreVideos.length-1]) {
            let videos = this.props.genreVideos.map((video, i) => {
                return <GalleryShowItem video={video} key={i + (this.props.genre.id * 10)} />
            })
            // let containerClass = this.state.isMouseInside ? "browse_row_slider_wrapper browse_row_transform" : "browse_row_transform"
            let rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <div>{this.props.genre.name}</div>
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title">{rowTitle}</span></h2>
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