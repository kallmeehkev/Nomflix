import React from 'react';
import GalleryShowItemContainer from './gallery_show_item_container';
import GalleryShowRowItemContentContainer from './gallery_show_row_item_content_container';

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
        if (this.props.pageType === "genre" && this.props.genreVideos[0].duration === 0) {
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
        let videosExist = !!this.props.genreVideos.length || !!this.props.myListVideos.length;
        if (videosExist) {
            let displayVideos;
            let rowTitle;
            let content;
            if (this.props.pageType === "genre") {
                displayVideos = this.props.genreVideos.map((video, i) => {
                    let active = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                    return <GalleryShowItemContainer video={video} key={i + (this.props.genre.id * 10)} handleOpen={() => this.handleOpen(i)} active={active} />
                })
                rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <div>{this.props.genre.name}</div>
                content = this.props.genreVideos[this.state.videoIdx];
            } else if (this.props.pageType === "myList") {
                displayVideos = this.props.myListVideos.map((video, i) => {
                    let active = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                    return <GalleryShowItemContainer video={video} key={i} handleOpen={() => this.handleOpen(i)} active={active} />
                })
                content = this.props.myListVideos[this.state.videoIdx];
            }
            let style = {
                width: `${displayVideos.length*18.4}vw`
            }
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title">{rowTitle}</span></h2>
                    {/* <div className="browse_row_content"> */}
                        <div className="browse_row_slider" style={style}>
                            <div className="browse_row_slider_wrapper">
                            {displayVideos}
                            </div>
                        </div>
                    {/* </div> */}
                    <div className={this.state.open ? "show_row_item_content active" : "show_row_item_content"}>
                        <GalleryShowRowItemContentContainer content={content} handleClose={this.handleClose}/>
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