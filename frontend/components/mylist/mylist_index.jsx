import React from 'react'
import { Link } from 'react-router-dom';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import GalleryShowRowContainer from '../gallery/gallery_show_row_container.js';

class MyListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowIdx: 0,
            open: false,
        }
        this.handleActiveRow = this.handleActiveRow.bind(this);
    }

    handleActiveRow(i) {
        this.setState({ activeRowIdx: i, open: true })
    }

    render() {
        let {videos, pageType} = this.props;
        let rows = [];
        let container = [];
        let rowActive;
        let title = pageType === "myList" ? "My List" : "Search Results";
        for(let i = 0; i < videos.length; i++) {
            container.push(videos[i])
            if (container.length === 5) {
                let rowIdx = Math.floor(i/5);
                rowActive = (this.state.open && (rowIdx === this.state.activeRowIdx));
                rows.push(<GalleryShowRowContainer myListVideos={container} key={i} pageType={pageType}
                    rowActive={rowActive} handleActiveRow={()=>this.handleActiveRow(rowIdx)}/>)
                container = [];
            }
            else if (i === videos.length - 1) {
                let rowIdx = Math.floor(i / 5);
                rowActive = (this.state.open && (rowIdx === this.state.activeRowIdx));
                rows.push(<GalleryShowRowContainer myListVideos={container} key={i} pageType={pageType}
                    rowActive={rowActive} handleActiveRow={() => this.handleActiveRow(rowIdx)} />)
                container = [];
            }
        }
        return (
            <div className="browse_body">
                {/* <GalleryNavBarContainer path={this.props.match.path} /> */}
                <div className="myList_index_title">{title}</div>
                {rows}
            </div>
        )
    }
}

export default MyListIndex;