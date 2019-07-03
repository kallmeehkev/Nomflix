import React from 'react'
import SplashNavBarContainer from '../nav_bar/splash_nav_bar_container';
import { Link } from 'react-router-dom';
const SplashIndex = props => {
    return (
        <div className="splash_container">
            <SplashNavBarContainer />
            <div className="splash_body">
                <div className="splash_body_top_sec">
                    <div className="splash_background">
                        <img src="https://backgroundcheckall.com/wp-content/uploads/2017/12/netflix-background-8.jpg" className="splash_background_image"/>
                        <div className="splash_background_gradient"></div>
                    </div>
                    <div className="splash_text">
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <div>
                            <Link to="/signup"><span className="splash_sign_up_button">Sign Up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashIndex;