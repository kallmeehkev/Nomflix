import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { setCurrentProfile } from '../../actions/profile_actions';
import { connect } from 'react-redux';


class ProfileModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        this.props.closeModal();
        this.props.setCurrentProfile(1)
        this.scrollToTop();
    }

    scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        let {profiles} = this.props
        let thumbnail = (profiles[0]) ? profiles[0].photoUrl : "";
        let name = (profiles[0]) ? profiles[0].name : "";
        return(
            <div className="profile_modal_container">
                <div className="profile_modal_box">
                    <div className="profile_modal_title">Who's watching?</div>
                    <div className="profile_modal_thumbnails_container">
                        <div className="profile_modal_thumbnail_box">
                            <button onClick={this.handleClick}><img src={thumbnail} className="profile_modal_thumbnail" /></button>
                            <div className="profile_modal_name">{name}</div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profiles: Object.values(state.entities.profiles),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        setCurrentProfile: (profileId) => dispatch(setCurrentProfile(profileId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);

