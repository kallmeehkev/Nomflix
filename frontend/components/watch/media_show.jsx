import React from 'react';

class MediaShow extends React.Component {

    componentDidMount() {
        this.props.fetchMedium(this.props.match.params.mediaId)
    }

    render () {
        return (
            <div className="media_show">
                <video src={this.props.video.mediaFileUrl} autoPlay controls muted></video>
            </div>
        )
    }
}

export default MediaShow;