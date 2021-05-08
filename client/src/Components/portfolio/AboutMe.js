import React from 'react';
import "../../styles/main.css";

const AboutMe = () => {
    return (
        <section className="portfolio-about-me" id="about-me-section">
            <div className="portfolio-about-me__img-wrapper">
            </div>
            <div className="portfolio-about-me__subtitle-text-wrapper">
                <span className="portfolio-about-me__subtitle">Hello, I'm <span className="portfolio-about-me__subtitle--highlight">Daniel</span>. I'm thrilled that you're here!</span>
                <div className="portfolio-about-me__text">
                    I love coding beautiful, simple things that get the job done just right. I specialise in <div className="portfolio-about-me__text--highlight1-wrapper"><span className="portfolio-about-me__text--highlight1">React & CSS/Sass for the front-end</span></div>, <div className="portfolio-about-me__text--highlight2-wrapper"><span className="portfolio-about-me__text--highlight2">Express for the back-end</span></div>, and have experience with <div className="portfolio-about-me__text--highlight3-wrapper"><span className="portfolio-about-me__text--highlight3">MongoDB for databases</span></div>.
                </div>
                <p className="portfolio-about-me__text">
                    Welcome to my portfolio!
                </p>
            </div>
        </section>
    )
}

export default AboutMe;