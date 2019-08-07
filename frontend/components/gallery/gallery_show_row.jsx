import React from 'react';
import GalleryShowItemContainer from './gallery_show_item_container';
import GalleryShowRowItemContent from './gallery_show_row_item_content';

class GalleryShowRow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     isMouseInside: false
        // }
        // this.mouseEnter = this.mouseEnter.bind(this)
        // this.mouseLeave = this.mouseLeave.bind(this)
        this.state = {
            videoIdx: 0,
            open: false,
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
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

    handleOpen(i) {
        this.setState({videoIdx: i, open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        if (this.props.genreVideos[this.props.genreVideos.length-1]) {
            let videos = this.props.genreVideos.map((video, i) => {
                let active = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                return <GalleryShowItemContainer video={video} key={i + (this.props.genre.id * 10)} handleOpen={() => this.handleOpen(i)} active={active}/>
            })
            let rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <div>{this.props.genre.name}</div>
            let style = {
                width: `${videos.length*18.4}vw`
                // width: `300%`,
            }
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title">{rowTitle}</span></h2>
                    {/* <div className="browse_row_content"> */}
                        <div className="browse_row_slider" style={style}>
                            <div className="browse_row_slider_wrapper">
                                {videos}
                            </div>
                        </div>
                    {/* </div> */}
                    <div className={this.state.open ? "show_row_item_content active" : "show_row_item_content"}>
                        <GalleryShowRowItemContent content={this.props.genreVideos[this.state.videoIdx]} handleClose={this.handleClose}/>
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