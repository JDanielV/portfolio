import React from 'react';
import "../../styles/main.css";
import MobilePhoneImg from "../../assets/torum-assets/images/social-mobile.webp";

const MobileAppSection = () => {
    return (
        <div className="torum-mobile-app">
            <div className="torum-mobile-app__left-wrapper">
                <h2 className="torum-mobile-app__title">TORUM's Mobile App</h2>
                <p className="torum-mobile-app__text">TORUM's upcoming app will allow everyone to stay updated with latest crypto news, trends and contents anyplace, anytime without a hassle. Stay tuned for our latest announcement!</p>
                <button className="torum-mobile-app__button">coming soon</button>
            </div>
            <div className="torum-mobile-app__right-wrapper">
                <img className="torum-mobile-app__right-img" src={MobilePhoneImg} alt="mobile app"/>
            </div>
        </div>
    )
}

export default MobileAppSection;