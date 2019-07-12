import React from 'react';

class MediaShow extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        this.props.fetchMedium(this.props.match.params.mediaId)
    }

    render () {
        return (
            <div className="media_show">
                <button onClick={this.goBack} className="media_back_button"><i className="fas fa-arrow-left"></i><div className="media_back_text">Back to Browse</div></button>
                <video src={this.props.video.mediaFileUrl} autoPlay controls muted></video>
            </div>
        )
    }
}

export default MediaShow;