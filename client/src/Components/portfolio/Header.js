import React from 'react';
import "../../styles/main.css";
// import LogoHeader from "../../assets/portfolio-assets/images/portfolio-logo-header.png";

const Header = () => {

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
        <header className="portfolio-header">
            <a className="portfolio-header__nav-link-logo" href="">
                <img className="portfolio-header__nav-logo-img" src="" alt="portfolio logo" />
            </a>
            <div className="portfolio-header__nav-button-mobile">
                <span className="portfolio-header__nav-button-span-mobile">menu</span>
            </div>
            <nav className="portfolio-header__nav">
                <ul className="portfolio-header__nav-buttons-wrapper">
                    {navButtons.map((button) => {
                        return (
                            <li className="portfolio-header__nav-button">
                                <span className="portfolio-header__nav-button-text">
                                    {button.buttonText}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;