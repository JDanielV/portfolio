import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import LogoHeader from "../../assets/torum-assets/images/torum-logo-header.png";

const FixedHeader = ({ scrollThreshold }) => {

    const [fixedHeaderClasses, setFixedHeaderClasses] = useState("torum-header-fixed torum-header-fixed--hide");
    const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        window.clearTimeout();
        if (scrollThreshold && firstLoad) {
            setFixedHeaderClasses("torum-header-fixed--display");
            window.setTimeout(() => {
                setFixedHeaderClasses("torum-header-fixed");
            }, 100);
            console.log("scroll threshold" + scrollThreshold);
        }
        setFirstLoad(true);
    }, []);

    useEffect(() => {
        window.clearTimeout();
        if (!scrollThreshold && firstLoad) {
            setFixedHeaderClasses('torum-header-fixed torum-header-fixed--hide');
            window.setTimeout(() => {
                setFixedHeaderClasses("torum-header-fixed torum-header-fixed--hide torum-header-fixed--no-display");
            }, 300);
        }
        else if (scrollThreshold && firstLoad) {
            setFixedHeaderClasses("torum-header-fixed--display");
            window.setTimeout(() => {
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