import React from 'react';
import "../../styles/main.css";
// import LogoHeader from "../../assets/torum-assets/images/torum-logo-header.png";

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
            <nav className="portfolio-header__nav">
                <a className="portfolio-header__nav-link-logo" href="">
                    <img className="portfolio-header__nav-logo-img" src="" alt="portfolio logo" />
                </a>
                <div className="portfolio-header__nav-buttons-wrapper">
                    {navButtons.map((button) => {
                        return (
                            <div className="portfolio-header__nav-button">
                                <span className="portfolio-header__nav-button-text">
                                    {button.buttonText}
                                </span>
                            </div>
                        )
                    })};
                </div>
            </nav>
        </header>
    );
}

export default Header;