import React from 'react'
import { Link } from 'react-router-dom';
import * as Selectors from '../../reducers/selectors';
import GalleryAnimateLoad from './gallery_animate_load';

class GalleryFPVideo extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {video: null}
        let videoId = this.props.pageType === "genreShow" ? this.props.randId : this.props.browseVid.id
        this.state = {
            randId: this.props.randId,
            addedToMyList: !!this.props.myListsHashByMediaId[videoId],
            myList: this.props.myListsHashByMediaId[videoId] || {},
        }
        this.addToMyList = this.addToMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pageType === 'genreShow' && prevState.addedToMyList !== !!this.props.myListsHashByMediaId[this.state.randId]) {
            this.setState({ addedToMyList: !!this.props.myListsHashByMediaId[this.state.randId],
                myList: this.props.myListsHashByMediaId[this.state.randId]
            })
        }
        if (prevProps.genreId !== this.props.genreId && prevProps.pageType === 'genreShow') {
            debugger
            this.setState({randId: this.props.randId,
                addedToMyList: !!this.props.myListsHashByMediaId[this.props.randId],
                myList: this.props.myListsHashByMediaId[this.props.randId]})
        }
        if (prevProps.pageType !== 'genreShow' && Object.values(prevProps.myListsHashByMediaId).length !== Object.values(this.props.myListsHashByMediaId).length) {
            this.setState({
                randId: this.props.randId,
                addedToMyList: !!this.props.myListsHashByMediaId[this.props.browseVid.id],
                myList: this.props.myListsHashByMediaId[this.props.browseVid.id]
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    addToMyList() {
        if (this.props.pageType === "genreShow") {
            this.props.createMyList({
                profile_id: this.props.profileId,
                media_id: this.state.randId,
            });
        } else {
            this.props.createMyList({
                profile_id: this.props.profileId,
                media_id: this.props.browseVid.id,
            });
        } 
    }

    removeFromMyList() {
        if (this.props.pageType === "genreShow") {
            this.props.deleteMyList(this.state.myList.id);
        } else {
            this.props.deleteMyList(this.props.myListsHashByMediaId[this.props.browseVid.id].id);
        } 
    }

    render() {
        const randFPVideo = this.props.media[this.state.randId] || {id: 0};
        let addVideo = <div className="play_button_container"><button onClick={this.addToMyList} className="link">
            <div className="play_button"><i className="fas fa-plus"></i></div><div className="play_button_text">My List</div></button></div>;
        let removeVideo = <div className="play_button_container"><button onClick={this.removeFromMyList} className="link">
            <div className="play_button"><i className="fas fa-check"></i></div><div className="play_button_text">My List
            </div></button></div>;
        let myListStatus = this.state.addedToMyList ? removeVideo : addVideo;
        if (randFPVideo.id !== 0 || this.props.browseVid.id !== 0) {
            let video = this.props.pageType === 'genreShow' ? randFPVideo : this.props.browseVid
            let fpVideoStyle = { backgroundImage: 'url(' + video.thumbnailUrl + ')' };
            let genreTag = "";
            if (this.props.pageType === 'genreShow') {
                genreTag = (<div className="genre_tag_container">
                    <div className="genre_tag_text">Genre</div>
                    <div className="genre_tag_arrow"><i className="fas fa-angle-right"></i></div>
                    <div className="genre_tag_title">{this.props.genre.name}</div>
                    </div>)
            }
            let description;
            if (video.description) {
                description = video.description.split(' ')
                description = description.length > 25 ? description.slice(0, 25).join(' ').concat('...') : description = description.join(' ')
            } else {
                description = ""
            }
            return (
                <div className="browse_fp_video_container">
                    <div className="browse_fp_video" style={fpVideoStyle}>
                        <div className="browse_fp_background_gradient"></div>
                        <div className="browse_fp_topleft_gradient"></div>
                    </div>
                    <span className="browse_fp_video_maturity_rating">
                        <span className="browse_fp_video_maturity_rating_text">{video.maturityRating}</span>
                    </span>
                    {genreTag}
                    <div className="browse_fp_video_side_section">
                        <div className="browse_side_section_controls">
                            <div className="browse_fp_video_title">
                                {video.title}
                            </div>
                            <div className="browse_fp_video_buttons_container">
                                <div className="play_button_container"><div className="link"><Link to={`/watch/${video.id}`}>
                                    <div className="play_button"><i className="fas fa-play"></i></div><div className="play_button_text">Play</div></Link></div>
                                </div>
                                {myListStatus}
                            </div>
                            <div className="browse_fp_video_description">
                                <GalleryAnimateLoad description={description} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {

            return (
                <div>
                    fpVideoShow
                </div>
            )
        }
    }
}

export default GalleryFPVideo;