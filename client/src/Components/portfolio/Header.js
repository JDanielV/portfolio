import React, { useState } from 'react';
import "../../styles/main.css";
import CodingIcon from "../../assets/portfolio-assets/hero-icon.svg";
import MobileNav from "./MobileNav";

const Header = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [inTransition, setInTransition] = useState(false);

    const toggleMobileNav = () => {
        if (!inTransition) {
            setInTransition(true);

            setShowMobileNav(!showMobileNav);

            setTimeout(() => {
                setInTransition(false);
            }, 700)
        }
    }

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
                <img className="portfolio-header__nav-logo-img" src={CodingIcon} alt="portfolio logo" />
            </a>
            <div className="portfolio-header__nav-button-mobile" onClick={toggleMobileNav}>
                <span className="portfolio-header__nav-button-span-mobile">menu</span>
            </div>
            <MobileNav showMobileNav={showMobileNav} />
            <nav className="portfolio-header__nav">
                <ul className="portfolio-header__nav-buttons-wrapper">
                    {navButtons.map((button) => {
                        return (
                            <li className="portfolio-header__nav-button" key={button.buttonText}>
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