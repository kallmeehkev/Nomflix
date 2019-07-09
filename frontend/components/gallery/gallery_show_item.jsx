import React from 'react'
import { Link } from 'react-router-dom';

class GalleryShowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMouseInside: false
        }
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }

    mouseEnter() {
        this.setState({ isMouseInside: true });
    }
    mouseLeave() {
        this.setState({ isMouseInside: false });
    }

    render() {
        let defaultVideo = {
            id: 0,
            description: "",
            title: "",
            duration: 0,
            maturityRating: "PG",
            thumbnailUrl: "",
            mediaUrl: ""
        }

        let video = this.props.video ? this.props.video : defaultVideo;
        const style = {
            backgroundImage: 'url(' + video.thumbnailUrl + ')',
        };

        return (
            <div className="browse_row_item_container">
                <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className={"browse_row_item_content " + (this.state.isMouseInside ? 'browse_row_transform' : '')} style={style}>
                        {/* <div className="a"></div> */}
                        <div className="b"><Link to={`/watch/${video.id}`}><div className="browse_row_item_link"></div></Link></div>
                        {/* <div className="c"></div> */}
                        {/* <img src={video.thumbnailUrl}/> */}
                    </div>
            </div>
        )
    }
}

export default GalleryShowItem;