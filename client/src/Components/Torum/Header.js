import React from 'react';
import ReactDOM from 'react-dom';
import "../../styles/main.css";

const Header = (props) => {
    return (
        <header className="torum-header">
            <nav className="torum-header__nav">
                <a className="torum-header__nav-link-logo" href="">
                    <img className="torum-header__nav-logo-img" src="" alt="torum logo" />
                </a>
                <div className="torum-header__nav-signup-button">
                    <span className="torum-header__nav-signup-button-text">
                        Login / Sign Up
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;