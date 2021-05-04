import React from 'react';
import "../../styles/main.css";
import CodingIcon from "../../assets/portfolio-assets/hero-icon.svg";

const HeroSection = () => {
    return (
        <section className="portfolio-hero">
            <div className="portfolio-hero__main-wrapper">
                <div className="portfolio-hero__text-divider-wrapper">
                    <div className="portfolio-hero__hero-title-wrapper">
                        <h1 className="portfolio-hero__hero-title">Daniel</h1>
                        <h1 className="portfolio-hero__hero-title2">Villaverde</h1>
                    </div>
                    <div className="portfolio-hero__divider" />
                    <div className="portfolio-hero__divider2" />
                    <div className="portfolio-hero__texts-wrapper">
                        <span className="portfolio-hero__text">
                            Full Stack
                        </span>
                        <span className="portfolio-hero__text2">
                            Web Development
                        </span>
                    </div>
                </div>
                <div className="portfolio-hero__img-wrapper">
                    <img className="portfolio-hero__img" src={CodingIcon} alt="coding big" />
                </div>
            </div>
        </section>
    )
};

export default HeroSection;