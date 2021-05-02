import React from 'react';
import "../../styles/main.css";

const MobileNav = () => {

    const navButtons = [
        {
            buttonText: "portfolio",
            buttonColor: ""
        },
        {
            buttonText: "about",
            buttonColor: ""
        },
        {
            buttonText: "contact",
            buttonColor: ""
        },
    ];

    return (
        <nav className="portfolio-header__mobile-nav">
            <div className="portfolio-header__mobile-nav-main-wrapper">
                <ul className="portfolio-header__mobile-nav-links">
                    {navButtons.map((button) => {
                        return (
                            <li className="portfolio-header__mobile-nav-link">
                                <span className="portfolio-header__mobile-nav-link-text">
                                    {button.buttonText}
                                </span>
                            </li>
                        )
                    })}
                </ul>
                <div className="portfolio-header__mobile-nav-bottom-content">
                    <div className="portfolio-header__mobile-nav-bottom-info-wrapper">
                        <span className="portfolio-header__mobile-nav-bottom-info">Daniel Villaverde</span>
                        <span className="portfolio-header__mobile-nav-bottom-info">Full-Stack Web Developer</span>
                    </div>
                    <div className="portfolio-header__mobile-nav-bottom-icons-wrapper">
                        <a className="portfolio-header__mobile-nav-bottom-icon-link" href="" target="_blank">
                            <img className="portfolio-header__mobile-nav-bottom-icon" src="" alt="linked in" />
                        </a>
                        <a className="portfolio-header__mobile-nav-bottom-icon-link" href="" target="_blank">
                            <img className="portfolio-header__mobile-nav-bottom-icon" src="" alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}