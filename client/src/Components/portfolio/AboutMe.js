import React from 'react';
import "../../styles/main.css";
import AboutMeImg from "../../assets/portfolio-assets/about-me-pic.jpg";

const AboutMe = () => {
    return (
        <section className="portfolio-about-me">
            <div className="portfolio-about-me__img-wrapper">
                <img className="portfolio-about-me__img" src={AboutMeImg} alt="profile" />
            </div>
            <div className="portfolio-about-me__title-text-wrapper">
                <span className="portfolio-about-me__subtitle">Hello, I'm <span className="portfolio-about-me__subtitle--highlight">Daniel</span>. I'm thrilled that you're here!</span>
                <p className="portfolio-about-me__text">
                    I love coding beautiful, simple things that get the job done as effectively as possible. I specialise in <span className="portfolio-about-me__text-highlight1">React & CSS/Sass for the front-end</span>, <span className="portfolio-about-me__text-highlight2">Express for the back-end</span>, and have experience managing <span className="portfolio-about-me__text-highlight3">databases with MongoDB</span>.
                </p>
                <p className="portfolio-about-me__text">
                    Welcome to my portfolio!
                </p>
            </div>
        </section>
    )
}

export default AboutMe;