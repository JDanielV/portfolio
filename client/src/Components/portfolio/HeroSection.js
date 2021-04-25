import React, { useState } from 'react';
import "../../styles/main.css";

const HeroSection = () => {
    return (
        <section className="portfolio-hero">
            <div className="portfolio-hero__main-wrapper">
                <div className="portfolio-hero__text-divider-wrapper">
                    <div className="portfolio-hero__divider" />
                    <p className="portfolio-hero__text">
                        Welcome to my portfolio. I love coding beautiful, functional things that get the job done as simple and as effective as possible.
                    </p>
                </div>
                <div className="portfolio-hero__hero-text-img-wrapper">
                    <div className="portfolio-hero__hero-text-wrapper">
                        <span className="portfolio-hero__hero-text">Daniel Villaverde</span>
                    </div>
                    <div className="portfolio-hero__img-wrapper">
                        <img className="porfolio-hero__img" src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;