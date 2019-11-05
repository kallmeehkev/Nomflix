import React from 'react';
import GalleryShowItemContainer from './gallery_show_item_container';
import GalleryShowRowItemContentContainer from './gallery_show_row_item_content_container';
import StatusBar from './row_status_bar';

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
    
    componentDidUpdate(prevProps) {
        if (prevProps.rowActive !== this.props.rowActive) {
            this.setState({open: this.props.rowActive})
        }
    }

    mouseEnter(i) {
        if (this.state.open) {
            this.setState({ isMouseInside: true, hoveredVideoIdx: i, videoIdx: i });
        } else {
            this.setState({ isMouseInside: true, hoveredVideoIdx: i });
        }
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

    handleTranslate(i) {
        let translate;
        let activeItem = (this.state.open && this.state.videoIdx === i) ? "active" : ""
        let inactiveDropdownAndHovered = (activeItem !== "active" && !this.state.open && this.state.isMouseInside);
        if (activeItem === "active") {
            translate = {
                transform: 'translateX(' + this.state.rowIdx * -92 + 'vw) translateY(-1vw)',
                outline: '2px solid white'
            }
        } else if (inactiveDropdownAndHovered) {
            if (this.state.hoveredVideoIdx % 5 === 0) { //leftmost shown video is hovered
                if (i > this.state.hoveredVideoIdx) {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 + 9.4) + 'vw)',
                    }
                } else if (i < this.state.hoveredVideoIdx) {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92) + 'vw)',
                    }
                } else {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 + 4.6) + 'vw)',
                    }
                }
            } else if (this.state.hoveredVideoIdx % 5 === 4) { //rightmost shown video is hovered
                if (i > this.state.hoveredVideoIdx) {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92) + 'vw)',
                    }
                } else if (i < this.state.hoveredVideoIdx) {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 - 9.4) + 'vw)',
                    }
                } else {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 - 4.6) + 'vw)',
                    }
                }
            } else {  //any other 3 in the middle are hovered
                if (i > this.state.hoveredVideoIdx) { 
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 + 4.6) + 'vw)',
                    }
                } else if (i < this.state.hoveredVideoIdx) {
                    translate = {
                        transform: 'translateX(' + (this.state.rowIdx * -92 - 4.6) + 'vw)',
                    }
                } else {
                    translate = {
                        transform: 'translateX(' + this.state.rowIdx * -92 + 'vw)',
                    }
                }
            }
        }
        else {
            translate = {
                transform: 'translateX(' + this.state.rowIdx * -92 + 'vw)',
            }
        }
        translate.transition = (activeItem === "active" || inactiveDropdownAndHovered) ?
        'transform 0.5s ease-in-out' : 'transform 0.8s ease-in-out';
        return translate;
    }

    render() {
        let videosExist = !!this.props.genreVideos.length || !!this.props.myListVideos.length;
        if (videosExist) {
            let displayVideos, rowTitle, content, buttonRight, buttonLeft, translate, statusBar;
            let hoverOff = this.state.open;
            if (this.props.pageType === "genre") {
                displayVideos = this.props.genreVideos.map((video, i) => {
                    let activeItem = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                    translate = this.handleTranslate(i);
                    return <GalleryShowItemContainer 
                            video={video} 
                            key={i + (this.props.genre.id * 10)} 
                            handleOpen={() => this.handleOpen(i)} 
                            active={activeItem} 
                            translate={translate} 
                            hoverOff={hoverOff} 
                            mouseEnter={() => this.mouseEnter(i)} 
                            mouseLeave={ this.mouseLeave} 
                            handleActiveRow={this.props.handleActiveRow}
                            />
                })
                rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <span>{this.props.genre.name}</span>
                content = this.props.genreVideos[this.state.videoIdx];
                statusBar = <StatusBar numVideos={displayVideos.length} activeRow={this.state.rowIdx} />
                if (this.state.rowIdx !== this.props.genreVideos.length / 5 - 1) {
                    buttonRight = <button className="browse_row_click_right" onClick={this.handleArrowRight}><i className="fas fa-chevron-right"></i></button>
                }
                if (this.state.rowIdx !== 0) {
                    buttonLeft = <button className="browse_row_click_left" onClick={this.handleArrowLeft}><i className="fas fa-chevron-left"></i></button>
                }
            } else if (this.props.pageType === "myList" || this.props.pageType === "search") {
                displayVideos = this.props.myListVideos.map((video, i) => {
                    let activeItem = (this.state.open && this.state.videoIdx === i) ? "active" : "";
                    translate = this.handleTranslate(i)
                    return <GalleryShowItemContainer 
                            video={video} 
                            key={i} 
                            handleOpen={() => this.handleOpen(i)} 
                            active={activeItem} 
                            translate={translate} 
                            hoverOff={hoverOff} 
                            mouseEnter={() => this.mouseEnter(i)} 
                            mouseLeave={this.mouseLeave} 
                            handleActiveRow={this.props.handleActiveRow}
                          />
                })
                content = this.props.myListVideos[this.state.videoIdx];
            }
            let width = {
                width: `${displayVideos.length*18.4}vw`
            }
            return (
                <div className="browse_row_container">
                    <h2>
                      <span className="browse_row_title">
                        {rowTitle}
                        {statusBar}
                      </span>
                    </h2>
                    <div className="browse_row_slider" style={width}>
                        {buttonLeft}
                        <div className="browse_row_slider_wrapper">
                            {displayVideos}
                        </div>
                        {buttonRight}
                    </div>
                    <div className={this.state.open ? "show_row_item_content active" : "show_row_item_content"}>
                        <GalleryShowRowItemContentContainer 
                          content={content} 
                          handleClose={this.handleClose}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>GalleryShowRow</div>
            )
        }
    }
}

export default GalleryShowRow;