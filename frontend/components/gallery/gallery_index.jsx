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
        // this.props.fetchGenres();
        // this.props.fetchMediaGenres();
        this.props.fetchMedium(14);
        document.addEventListener('scroll', _.throttle(this.checkIfNeedsMoreContent, 300), { passive: true });
        let genresArr = Object.values(this.props.genres);
        let genresArrlimit2 = genresArr.filter((genre, i) => i < 2)
        let that = this;
        let showRowsFirstTwo = genresArrlimit2.map((genre, i) => {
            let rowActive = (that.state.open && (that.state.genresFetched + i === that.state.activeRowIdx));
            debugger
            return <GalleryShowRowContainer genre={genre} key={genre.id} pageType="genre" rowActive={rowActive}
                handleActiveRow={() => this.handleActiveRow(this.state.genresFetched + i)} /> 
        })
        this.setState({genreRows: showRowsFirstTwo, genresFetched: 2});
    }

    checkIfNeedsMoreContent() {
        let pixelsFromWindowBottomToBottom = 0 + document.documentElement.scrollHeight - window.scrollY - window.screen.height;

        // if (pixelsFromWindowBottomToBottom < 200) {
        //     // Here it would go an ajax request
        //     let genresArr = Object.values(this.props.genres);
        //     let genresArrlimit2 = genresArr.filter((genre, i) => {
        //         let bottomLimit = this.state.genresFetched % 12;
        //          return (i >= bottomLimit && i < bottomLimit + 2)  
        //     })
        //     let twoMoreRows = genresArrlimit2.map((genre, i) => {
        //         let rowActive = (this.state.open && (this.state.genresFetched + i === this.state.activeRowIdx));
        //         return <GalleryShowRowContainer genre={genre} key={genre.id} pageType="genre" rowActive={rowActive}
        //             handleActiveRow={() => this.handleActiveRow(this.state.genresFetched + i)} />
        //     })
        //     let currentRows = this.state.genreRows;
        //     let currentlyFetched = this.state.genresFetched;
        //     this.setState({ genreRows: currentRows.concat(twoMoreRows), genresFetched: currentlyFetched + 2 });
        // }
    }

    handleActiveRow(i) {
        debugger
        this.setState({activeRowIdx: i, open: true})
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            // let genresArr = Object.values(this.props.genres);
            // let genresArrlimit6 = genresArr.filter( (genre, i) => i < 6) 
            // let showRowsFirstSix = genresArrlimit6.map( (genre, i) => {
            //     let rowActive = (this.state.open && (i === this.state.activeRowIdx));
            //     return <GalleryShowRowContainer genre={genre} key={genre.id} pageType="genre" rowActive={rowActive}
            //     handleActiveRow={()=>this.handleActiveRow(i)}/> 
            // })
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer path={this.props.match.path}/>
                    <GalleryFPVideoContainer genreId={5} pageType="browse" browseVid={this.props.fpVideo} />
                    {/* {showRowsFirstSix} */}
                    {this.state.genreRows}
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
