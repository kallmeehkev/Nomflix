import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { setCurrentProfile } from '../../actions/profile_actions';
import { connect } from 'react-redux';
import {randomProfileThumbnail} from '../../reducers/selectors';
import * as Images from '../images';



class ProfileModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileFormOpen: false,
        }
        this.handleSelectProfile = this.handleSelectProfile.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleSelectProfile(e) {
        e.stopPropagation();
        this.props.closeModal();
        this.props.setCurrentProfile(1)
        this.scrollToTop();
    }

    handleCreateProfile(e) {
        e.stopPropagation();
        this.setState({
            profileFormOpen: true,
        })
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
                <div className="modal_splash_logo_container"><img src={Images.nomflix_logo_URL} className="browse_splash_logo"/></div>
                <div className="profile_modal_box">
                    <div className="profile_modal_title">Who's watching?</div>
                    <div className="profile_modal_thumbnails_container">
                        <div className="profile_modal_thumbnail_box">
                            <button onClick={this.handleSelectProfile}><img src={thumbnail} className="profile_modal_thumbnail" /></button>
                            <div className="profile_modal_name">{name}</div> 
                        </div>
                        <div className="profile_modal_thumbnail_box">
                            <button onClick={this.handleSelectProfile}><img src={thumbnail} className="profile_modal_thumbnail" /></button>
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

