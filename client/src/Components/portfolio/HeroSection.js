import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import CodingIcon from "../../assets/portfolio-assets/hero-icon.svg";

const HeroSection = () => {

    const [introClasses, setIntroClasses] = useState({
        heroGraphic: "portfolio-hero__img-wrapper",
        titleOne: "portfolio-hero__hero-title",
        titleTwo: "portfolio-hero__hero-title2",
        dividerOne: "portfolio-hero__divider",
        dividerTwo: "portfolio-hero__divider2",
        textOne: "portfolio-hero__text",
        textTwo: "portfolio-hero__text2",
    });

    useEffect(() => {
        setTimeout(() => {
            setIntroClasses({
                heroGraphic: "portfolio-hero__img-wrapper portfolio-hero__img-wrapper--mounted",
                titleOne: "portfolio-hero__hero-title portfolio-hero__hero-title--mounted",
                titleTwo: "portfolio-hero__hero-title2 portfolio-hero__hero-title2--mounted",
                dividerOne: "portfolio-hero__divider portfolio-hero__divider--mounted",
                dividerTwo: "portfolio-hero__divider2 portfolio-hero__divider2--mounted",
                textOne: "portfolio-hero__text portfolio-hero__text--mounted",
                textTwo: "portfolio-hero__text2 portfolio-hero__text2--mounted",
            })
        }, 500)
    }, [])

    return (
        <section className="portfolio-hero" id="hero-section">
            <div className="portfolio-hero__main-wrapper">
                <div className="portfolio-hero__text-divider-wrapper">
                    <div className="portfolio-hero__hero-title-wrapper">
                        <h1 className={introClasses.titleOne}>Daniel</h1>
                        <h1 className={introClasses.titleTwo}>Villaverde</h1>
                    </div>
                    <div className={introClasses.dividerOne} />
                    <div className={introClasses.dividerTwo} />
                    <div className="portfolio-hero__texts-wrapper">
                        <span className={introClasses.textOne}>
                            Full Stack
                        </span>
                        <span className={introClasses.textTwo}>
                            Web Development
                        </span>
                    </div>
                </div>
                <div className={introClasses.heroGraphic}>
                    <img className="portfolio-hero__img" src={CodingIcon} alt="coding big" />
                </div>
            </div>
        </section>
    )
};

export default HeroSection;