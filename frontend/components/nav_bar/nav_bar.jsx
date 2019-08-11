import React from 'react';
import { Link } from 'react-router-dom';
import NavBarIcon from './nav_bar_icon'
import * as Images from '../images';
//source for scrolling effect: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/


class NavBar extends React.Component  {
    constructor(props) {
        super(props)
        this.debounce = this.debounce.bind(this);
        this.storeScroll = this.storeScroll.bind(this);
        this.logout = this.logout.bind(this);
    }

    debounce(fn) {
        let frame;
        return (...params) => {
            if (frame) {
                cancelAnimationFrame(frame);
            }
            frame = requestAnimationFrame(() => {
                fn(...params);
            });
        }
    }

    storeScroll() {
        document.documentElement.dataset.scroll = window.scrollY ? window.scrollY : 0;
    }

    componentDidMount() {
        if (this.props.currentUser) {
            document.addEventListener('scroll', this.debounce(this.storeScroll), { passive: true });
            this.storeScroll();
            this.props.fetchProfile(this.props.currentProfileId);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.debounce(this.storeScroll), { passive: true });
    }

    logout() {
        this.props.unSetCurrentProfile(this.props.currentProfileId).then(() => this.props.logout())
    }

    render() {
        if (this.props.currentUser) { //logged in
            let logo = this.props.path === "/browse" ? <img src={Images.nomflix_logo_URL} className="browse_splash_logo" /> : <Link to="/browse"><img src={Images.nomflix_logo_URL} className="browse_splash_logo" /></Link>
            let home = this.props.path === "/browse" ? "Home" : <Link to="/browse">Home</Link>;
            let myList = this.props.path === "/browse/my-list" ? "My List" : <Link to="/browse/my-list">My List</Link>;
            //need logic for classNames browse nav bar.  if on profile page or not.  apply on pinning and main
            let {genres} = this.props
            let firstFourGenres = [];
            let secondFourGenres = []; 
            let thirdFourGenres = [];
            genres.forEach( (genre, i) => {
                let genreEle = <div className="genres_vertical_container_item" key={i}><Link to={`/browse/genre/${genre.id}`}>{genre.name}</Link></div>;
                if (i < 4) {
                    firstFourGenres.push(genreEle)
                } else if (i > 3 && i < 8) {
                    secondFourGenres.push(genreEle)
                } else {
                    thirdFourGenres.push(genreEle)
                }
            })
            return (
                <div className="browse_nav_bar_container">
                    <div className="browse_nav_bar_container_gradient"></div>
                    <div className="browse_pinning_nav_bar">
                        <div className="main_browse_nav_bar">
                            <div className="main_browse_nav_bar_left">
                                {logo}
                                <div className="main_nav_bar_left_controls_home">{home}</div>
                                <div className="main_nav_bar_left_controls_genre">Genres<i className="fas fa-caret-down down"></i>
                                    <div className="browse_dropdown-content_genre">
                                        <div className="browse_dropdown-arrow_genre"><div><i className="fas fa-caret-up"></i></div></div>
                                        <div className="browse_dropdown_content_genre_container">
                                            <div className="genres_vertical_container">{firstFourGenres}</div>
                                            <div className="genres_vertical_container">{secondFourGenres}</div>
                                            <div className="genres_vertical_container">{thirdFourGenres}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main_nav_bar_left_controls_home">{myList}</div>
                            </div>
                            <div className="browse_nav_bar_profile_pic browse_dropdown">
                                <img src={this.props.fetchedProfile.photoUrl} className="browse_dropbtn"/>
                                <i className="fas fa-caret-down down"></i>
                                <div className="browse_dropdown-content">
                                    <div className="browse_dropdown-arrow"><div><i className="fas fa-caret-up"></i></div></div>
                                    <div className="browse_dropdown-list">
                                        <button onClick={this.logout}>Sign out of Nomflix</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            )
        } else {
            switch (this.props.navType) {
                case 'login':
                    return (
                        <div className="login_nav_bar_container">
                            <div className="login_nav_bar_header">
                                <span><Link to="/"><img src={Images.nomflix_logo_URL} className="login_splash_logo" /></Link></span>
                            </div>
                        </div>
                    )
                case 'signup':
                    return (
                        <div className="signup_nav_bar_container">
                            <div className="login_nav_bar_header">
                                <span><Link to="/"><img src={Images.nomflix_logo_URL} className="login_splash_logo" /></Link></span>
                            </div>
                            <Link to="/login"><span className='signup_redirect'>Log In</span></Link>
                        </div>
                    )
                default: //just the splash nav
                    return (
                        <div className="splash_nav_bar_container">
                            <div className="splash_nav_bar_header">
                                <span><img src={Images.nomflix_logo_URL} className="splash_logo" /></span>
                                <span><Link to="/login"><span className="authLink login">Log In</span></Link></span>
                            </div>
                        </div>
                    )
            }
        }
    }
}

export default NavBar;