import React from 'react';
import GalleryShowItemContainer from './gallery_show_item_container';
import GalleryShowRowItemContentContainer from './gallery_show_row_item_content_container';

class GalleryShowRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoIdx: 0,
            open: false,
            rowIdx: 0,
            isMouseInside: false,
            hoveredVideoIdx: 0,
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleArrowRight = this.handleArrowRight.bind(this);
        this.handleArrowLeft = this.handleArrowLeft.bind(this);
    }    

    componentDidMount() {
        if (this.props.pageType === "genre") {
            this.props.fetchGenre(this.props.genre.id)
        }
    }
    
    mouseEnter(i) {
        this.setState({ isMouseInside: true, hoveredVideoIdx: i });
    }
    mouseLeave() {
        this.setState({ isMouseInside: false });
    }

    handleArrowRight() {
        let {genreVideos} = this.props;
        if (this.state.rowIdx === (genreVideos.length / 5 - 1)) {
            this.setState({rowIdx: 0});
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({rowIdx: currentRowIdx + 1});
        }
    }

    handleArrowLeft() {
        let {genreVideos} = this.props;
        if (this.state.rowIdx === 0) {
            this.setState({ rowIdx: genreVideos.length / 5 - 1 });
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({ rowIdx: currentRowIdx - 1 });
        }
    }

    handleOpen(i) {
        this.setState({videoIdx: i, open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        let videosExist = !!this.props.genreVideos.length || !!this.props.myListVideos.length;
        if (videosExist) {
            let displayVideos, rowTitle, content, buttonRight, buttonLeft, translate;
            let hoverOff = this.state.open;
            if (this.props.pageType === "genre") {
                displayVideos = this.props.genreVideos.map((video, i) => {
                    let activeItem = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                    if (activeItem === "active") {
                            translate = { transform: 'translateX(' + this.state.rowIdx * -92 + 'vw)          translateY(-1vw)',
                                transition: 'transform 0.4s',
                                outline: '2px solid white'
                            }
                    
                    } else if (activeItem !== "active" && !this.state.open && this.state.isMouseInside) {
                        if (i > this.state.hoveredVideoIdx) {
                            translate = {
                                transform: 'translateX(' + (this.state.rowIdx * -92 + 4) + 'vw)',
                                transition: 'transform 0.4s ease-in-out',
                            }
                            // debugger
                        } else if (i < this.state.hoveredVideoIdx) {
                            translate = {
                                transform: 'translateX(' + (this.state.rowIdx * -92 - 4) + 'vw)',
                                transition: 'transform 0.4s ease-in-out',
                            }
                        } else if ({
                            translate = {
                                transform: 'translateX(' + this.state.rowIdx * -92 + 'vw)',
                                transition: 'transform 0.4s',
                            }
                        }
                    }
                    // let translate = activeItem === "active" ? 
                        // {
                        //     transform: 'translateX(' + this.state.rowIdx * -92 + 'vw) translateY(-1vw)',
                        //     transition: 'transform 1s',
                        //     outline: '2px solid white'
                        // }
                    // :
                    else {
                        translate = {
                            transform: 'translateX('+ this.state.rowIdx * -92 +'vw)',
                            transition: 'transform 1s',
                        }
                    }
                    return <GalleryShowItemContainer video={video} key={i + (this.props.genre.id * 10)} handleOpen={() => this.handleOpen(i)} active={activeItem} translate={translate} hoverOff={hoverOff} mouseEnter={() => this.mouseEnter(i)} mouseLeave={ this.mouseLeave}/>
                })
                rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <div>{this.props.genre.name}</div>
                content = this.props.genreVideos[this.state.videoIdx];
                if (this.state.rowIdx !== this.props.genreVideos.length / 5 - 1) {
                    buttonRight = <button className="browse_row_click_right" onClick={this.handleArrowRight}><i className="fas fa-chevron-right"></i></button>
                }
                if (this.state.rowIdx !== 0) {
                    buttonLeft = <button className="browse_row_click_left" onClick={this.handleArrowLeft}><i className="fas fa-chevron-left"></i></button>
                }
            } else if (this.props.pageType === "myList") {
                displayVideos = this.props.myListVideos.map((video, i) => {
                    let activeItem = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                    return <GalleryShowItemContainer video={video} key={i} handleOpen={() => this.handleOpen(i)} active={activeItem} hoverOff={hoverOff}/>
                })
                content = this.props.myListVideos[this.state.videoIdx];
            }
            let width = {
                width: `${displayVideos.length*18.4}vw`
            }
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title">{rowTitle}</span></h2>
                    {/* <div className="browse_row_content"> */}
                        <div className="browse_row_slider" style={width}>
                            {buttonLeft}
                            <div className="browse_row_slider_wrapper">
                                {displayVideos}
                            </div>
                            {buttonRight}
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