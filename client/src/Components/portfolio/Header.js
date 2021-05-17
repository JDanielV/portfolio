import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import CodingIcon from "../../assets/portfolio-assets/hero-icon.svg";
import MobileNav from "./MobileNav";

const Header = ({ breakpoint, portfolioScrollThreshold }) => {

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [inTransition, setInTransition] = useState(false);
    const [headerClasses, setHeaderClasses] = useState("portfolio-header");

    const toggleMobileNav = () => {
        if (!inTransition) {
            setInTransition(true);

            setShowMobileNav(!showMobileNav);

            setTimeout(() => {
                setInTransition(false);
            }, 700)
        }
    }

    const mobileNavLogoPress = () => {

        if (!inTransition && showMobileNav) {
            setInTransition(true);

            setShowMobileNav(!showMobileNav);

            setTimeout(() => {
                setInTransition(false);
            }, 700)
        }
    }

    useEffect(() => {
        if (breakpoint === "laptop") {
            if (portfolioScrollThreshold)
                setHeaderClasses("portfolio-header");
            else
                setHeaderClasses("portfolio-header portfolio-header--tall")
        }
        else
            setHeaderClasses("portfolio-header");
    }, [portfolioScrollThreshold]);

    const navButtons = [
        {
            buttonText: "projects",
            buttonColor: "",
            buttonLink: "#projects-section"
        },
        {
            buttonText: "about",
            buttonColor: "",
            buttonLink: "#about-me-section"
        },
        {
            buttonText: "contact",
            buttonColor: "",
            buttonLink: "#contact-section"
        },
    ];

    return (
        <header className={headerClasses}>
            <a className="portfolio-header__nav-link-logo" href="#hero-section" onClick={mobileNavLogoPress}>
                <img className="portfolio-header__nav-logo-img" src={CodingIcon} alt="portfolio logo" />
            </a>
            <div className="portfolio-header__nav-button-mobile" onClick={toggleMobileNav}>
                <span className="portfolio-header__nav-button-span-mobile">menu</span>
            </div>
            {(breakpoint === "mobile" || breakpoint === "tablet") && <MobileNav showMobileNav={showMobileNav} toggleMobileNav={toggleMobileNav} />}
            <nav className="portfolio-header__nav">
                <ul className="portfolio-header__nav-buttons-wrapper">
                    {navButtons.map((button) => {
                        return (
                            <a className="portfolio-header__nav-button-text-link" href={button.buttonLink} key={button.buttonText}>
                                <span className="portfolio-header__nav-button-text">
                                    {button.buttonText}
                                </span>
                            </a>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;