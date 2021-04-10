import React, { useEffect } from 'react';
import "../../styles/main.css";
import LogoHeader from "../../assets/torum-assets/images/torum-logo-header.png";

const Header = ({ scrollThreshold }) => {

    useEffect(() => {
        console.log(scrollThreshold);
    }, [scrollThreshold]);


    return (
        <header className="torum-header">
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

export default Header;