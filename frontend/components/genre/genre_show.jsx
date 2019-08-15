import React from 'react';
import GalleryNavBarContainer from '../nav_bar/gallery_nav_bar_container';
import { Link } from 'react-router-dom';
import GalleryShowRowContainer from '../gallery/gallery_show_row_container.js';
import GalleryFPVideoContainer from '../gallery/gallery_fp_video_container';
class GenreShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genreId: this.props.match.params.genreId,
            activeRowIdx: 0,
            open: false,
        }
        this.handleActiveRow = this.handleActiveRow.bind(this);
    }
    componentDidMount() {
        let videosFetched = !!this.props.genreVideos[0]
        if (!videosFetched) {
            this.props.fetchGenre(this.props.match.params.genreId);
        }
    }

    componentDidUpdate(prevProps) {
        let isNewGenre = prevProps.match.params.genreId !== this.props.match.params.genreId
        if (isNewGenre) {
            // this.props.fetchGenre(this.props.match.params.genreId);
            this.setState({ genreId: this.props.match.params.genreId});
        }
        let videosFetched = !!this.props.genreVideos[0]
        if (!videosFetched && isNewGenre) {
            this.props.fetchGenre(this.props.match.params.genreId);
        }
    }

    handleActiveRow(i) {
        this.setState({ activeRowIdx: i, open: true })
    }

    render() {
        if (this.props.genres[12] && this.props.mediaGenres[140]) {
            let rowActive = (this.state.open && (0 === this.state.activeRowIdx));
            let showOneRow = <GalleryShowRowContainer genre={this.props.genre} key={1} genreShow={true} pageType="genre"
                rowActive={rowActive} handleActiveRow={() => this.handleActiveRow(0)}/>
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer path={this.props.match.path} />
                    <GalleryFPVideoContainer genreId={Number(this.props.match.params.genreId)} pageType="genreShow"/>
                    {showOneRow}
                </div>
            ) 
        }
        else {
            return (
                <div className="browse_body">
                    <GalleryNavBarContainer />
                    <div className="browse_fp_video_container">Genre frontpage vid</div>
                    Genre Show
                </div>
            )
        }   
    }
}

export default GenreShow;