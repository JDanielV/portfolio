import React, { useState, useEffect } from 'react';
import BackArrow from "../../assets/torum-assets/icons/back-arrow.svg";
import { Link } from 'react-router-dom';

const BackToPortfolio = () => {

    const [buttonClasses, setButtonClasses] = useState("torum-back");

    useEffect(() => {

        let timer = setTimeout(() => {
            setButtonClasses("torum-back torum-back-mounted");
        }, 2500);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <Link to="/">
            <div className={buttonClasses}>
                <div className="torum-back__icon-wrapper">
                    <img className="torum-back__icon" src={BackArrow} alt="back to portfolio" />
                </div>
            </div>
        </Link>
    )
}

export default BackToPortfolio;