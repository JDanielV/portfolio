import React from 'react';
import "../../styles/main.css";
import CodingIcon from "../../assets/portfolio-assets/hero-icon.svg";

const HeroSection = () => {
    return (
        <section className="portfolio-hero">
            <div className="portfolio-hero__main-wrapper">
                <div className="portfolio-hero__text-divider-wrapper">
                    <div className="portfolio-hero__divider" />
                    <p className="portfolio-hero__text">
                        Hello, I love coding beautiful things that get the job done as simple and as effective as possible.
                    </p>
                </div>
                <div className="portfolio-hero__hero-text-img-wrapper">
                    <div className="portfolio-hero__hero-text-wrapper">
                        <h1 className="portfolio-hero__hero-text">Daniel</h1>
                        <h1 className="portfolio-hero__hero-text">Villaverde</h1>
                    </div>
                    <div className="portfolio-hero__img-wrapper">
                        <img className="portfolio-hero__img" src={CodingIcon} alt="coding big" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;