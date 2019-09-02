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
            randomThumbnail: randomProfileThumbnail(),
            input: "",
        }
        this.handleSelectProfile = this.handleSelectProfile.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.update = this.update.bind(this);
        this.handleCreateProfile = this.handleCreateProfile.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
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
        let randomThumbnail = randomProfileThumbnail();
        let name = (profiles[0]) ? profiles[0].name : "";
        let profileModalBox;
        let createProfileModalBox;
        if (this.state.profileFormOpen) {
            profileModalBox = "profile_modal_box";
            createProfileModalBox = "create_profile_modal_box active";
        } else {
            profileModalBox = "profile_modal_box active";
            createProfileModalBox = "create_profile_modal_box";            
        }
        return(
            <div className="profile_modal_container">
                <div className="modal_splash_logo_container"><img src={Images.nomflix_logo_URL} className="browse_splash_logo"/></div>
                <div className={profileModalBox}>
                    <div className="profile_modal_title">Who's watching?</div>
                    <div className="profile_modal_thumbnails_container">
                        <div className="profile_modal_thumbnail_box">
                            <button onClick={this.handleSelectProfile}><img src={thumbnail} className="profile_modal_thumbnail" /></button>
                            <div className="profile_modal_name">{name}</div> 
                        </div>
                        <div className="profile_modal_thumbnail_box">
                            <button onClick={this.handleCreateProfile}><div className="profile_modal_thumbnail"><i className="fas fa-plus-circle"></i></div></button>
                            <div className="profile_modal_name">Add Profile</div> 
                        </div>
                    </div>
                </div>
                <div className={createProfileModalBox}>
                    <h1>Add Profile</h1>
                    <h2>Add a profile for another person watching Nomflix.</h2>
                    <div className="create_profile_form_box">
                        <img src={randomThumbnail} className="profile_modal_thumbnail" />
                        <input type="text" onChange={this.update('input')} placeholder="Name"
                            className="create_profile_input"/>
                    </div>
                    <div className="create_profile_button_box">

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

