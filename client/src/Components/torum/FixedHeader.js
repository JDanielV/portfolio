import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import LogoHeader from "../../assets/torum-assets/images/torum-logo-header.png";

const FixedHeader = ({ scrollThreshold }) => {

    const [fixedHeaderClasses, setFixedHeaderClasses] = useState("torum-header-fixed torum-header-fixed--hide");

    useEffect(() => {
        if (!scrollThreshold) {
            setFixedHeaderClasses('torum-header-fixed torum-header-fixed--hide');
            setTimeout(() => {
                setFixedHeaderClasses("torum-header-fixed torum-header-fixed--hide torum-header-fixed--no-display");
            }, 300);
        }
        else {
            setFixedHeaderClasses("torum-header-fixed--display");
            setTimeout(() => {
                setFixedHeaderClasses("torum-header-fixed");
            }, 100);
        }
    }, [scrollThreshold]);

    return (
        <header className={fixedHeaderClasses}>
            <nav className="torum-header__nav">
                <a className="torum-header__nav-link-logo" href="">
                    <img className="torum-header__nav-logo-img" src={LogoHeader} alt="torum logo" />
                </a>
                <div className="torum-header__nav-signup-button">
                    <span className="torum-header__nav-signup-button-text">
                        Login
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default FixedHeader;