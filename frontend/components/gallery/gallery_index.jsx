import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from './gallery_show_row_container.js';
import GalleryFPVideoContainer from './gallery_fp_video_container';
import { throttle } from 'lodash';

class GalleryIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowIdx: 0,
            open: false,
            genreRows: [],
            genresFetched: 0,
        }
        this.handleActiveRow = this.handleActiveRow.bind(this);
        this.checkIfNeedsMoreContent = this.checkIfNeedsMoreContent.bind(this);
    }

    componentDidMount() {
        if (!this.props.currentProfileId) { this.props.openModal('profile'); }
        this.props.fetchMedium(14);
        document.addEventListener('scroll', _.throttle(this.checkIfNeedsMoreContent, 300), { passive: true });
        let genresArr = Object.values(this.props.genres);
        let genresArrlimit3 = genresArr.filter((genre, i) => i < 3)
        this.setState({genreRows: genresArrlimit3, genresFetched: 3});
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', _.throttle(this.checkIfNeedsMoreContent, 200), { passive: true });
    }

    checkIfNeedsMoreContent() {
        let pixelsFromWindowBottomToBottom = 0 + document.documentElement.scrollHeight - window.scrollY - window.screen.height;

        if (pixelsFromWindowBottomToBottom < 200 && !this.props.modal) {
            let genresArr = Object.values(this.props.genres);
            let genresArrlimit3 = genresArr.filter((genre, i) => {
                let bottomLimit = this.state.genresFetched % 12;
                 return (i >= bottomLimit && i < bottomLimit + 3)  
            })
            let threeMoreRows = genresArrlimit3;
            let currentRows = this.state.genreRows;
            let currentlyFetched = this.state.genresFetched;
            this.setState({ genreRows: currentRows.concat(threeMoreRows), genresFetched: currentlyFetched + 3 });
        }
    }

    handleActiveRow(i) {
        this.setState({activeRowIdx: i, open: true})
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let genreRows = this.state.genreRows.map( (genre, i) => {
                let rowActive = (this.state.open && (i === this.state.activeRowIdx));
                return <GalleryShowRowContainer genre={genre} key={i} pageType="genre" rowActive={rowActive}
                handleActiveRow={()=>this.handleActiveRow(i)}/> 
            })
            return (
                <div className="browse_body">
                    <GalleryFPVideoContainer genreId={5} pageType="browse" browseVid={this.props.fpVideo} />
                    {genreRows}
                </div>
            )
        } else {
            return (
                <div className="browse_body">
                    <div className="browse_fp_video_container">Gallery frontpage vid</div>
                    Gallery Index
                </div>
            )
        }
    }
}
export default GalleryIndex;
