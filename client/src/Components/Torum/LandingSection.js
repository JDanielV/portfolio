import React from 'react';
import "../../styles/main.css";
import LaptopImg from "../../assets/torum-assets/images/laptop.webp";
import Typewriter from "./Typewriter";

const LandingSection = (props) => {

    const typewriterStrings = ["Crypto Community Builders", "Crypto Enthusiasts", "Crypto Content Writers", "Crypto Project Owners"];

    return (
        <section className="torum-landing">
            <div className="torum-landing__main">
                <div className="torum-landing__main-wrapper">
                    <div className="torum-landing__title-wrapper">
                        <Typewriter stringsArray={typewriterStrings} typeSpeed={100} />
                    </div>
                    <div className="torum-landing__subtitle-wrapper">
                        <span className="torum-landing__subtitle">
                            TORUM is a revolutionary social media platform designed to connect worldwide cryptocurrency users.
                        </span>
                    </div>
                    <div className="torum-landing__cta-section-wrapper">
                        <button className="torum-landing__cta-button">
                            <div className="torum-landing__cta-background" />
                            <span className="torum-landing__cta-button-text">Sign up and get free crypto</span>
                        </button>
                        <div className="torum-landing__cta-text-wrapper">
                            <span className="torum-landing__cta-text">23,742 crypto users are connected on TORUM and we're still counting.</span>
                        </div>
                    </div>
                </div>
                <div className="torum-landing__hero-img-wrapper">
                    <img className="torum-landing__hero-img" src={LaptopImg} alt="torum social media" />
                </div>
            </div>
        </section>
    )
}

export default LandingSection;