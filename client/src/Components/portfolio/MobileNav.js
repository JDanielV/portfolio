import React, { useState, useEffect, useRef } from 'react';
import "../../styles/main.css";
import LinkedInIcon from "../../assets/portfolio-assets/linkedin.svg";
import GitHubIcon from "../../assets/portfolio-assets/github.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";


const MobileNav = ({ showMobileNav }) => {

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

    const [linksClasses, setLinksClasses] = useState("portfolio-header__mobile-nav-link-text");

    const openAnimation = () => {
        if (showMobileNav) {
            setTimeout(() => {
                setLinksClasses("portfolio-header__mobile-nav-link-text portfolio-header__mobile-nav-link-text--show");
            }, 400);
        }
        else {
            setLinksClasses("portfolio-header__mobile-nav-link-text");
        }
    }

    const mobileNavRef = useRef(null)

    useEffect(() => {
        openAnimation();

        if (!showMobileNav) {
            enableBodyScroll(mobileNavRef);
        }
        else {
            disableBodyScroll(mobileNavRef);
        }

        return () => {

        }
    }, [showMobileNav])

    return (
        <nav ref={mobileNavRef} className={showMobileNav ? "portfolio-header__mobile-nav portfolio-header__mobile-nav--show" : "portfolio-header__mobile-nav"}>
            <div className="portfolio-header__mobile-nav-main-wrapper">
                <ul className="portfolio-header__mobile-nav-links">
                    {navButtons.map((button) => {
                        return (
                            <li className="portfolio-header__mobile-nav-link" key={button.buttonText}>
                                <span className={linksClasses}>
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
                            <img className="portfolio-header__mobile-nav-bottom-icon" src={LinkedInIcon} alt="linked in" />
                        </a>
                        <a className="portfolio-header__mobile-nav-bottom-icon-link" href="" target="_blank">
                            <img className="portfolio-header__mobile-nav-bottom-icon" src={GitHubIcon} alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav;