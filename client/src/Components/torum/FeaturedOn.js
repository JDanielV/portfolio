import React from 'react';
import "../../styles/main.css";
import AccesswireImg from "../../assets/torum-assets/images/accesswire.webp";
import BenzingaImg from "../../assets/torum-assets/images/benzinga.webp";
import YahooFinanceImg from "../../assets/torum-assets/images/yahoo-finance.webp";
import BitcoinDotComImg from "../../assets/torum-assets/images/bitcoin-dot-com.webp";
import JinseImg from "../../assets/torum-assets/images/jinse.webp";
import ShenlianImg from "../../assets/torum-assets/images/shenlian.webp";

const images = [YahooFinanceImg, BitcoinDotComImg, AccesswireImg, BenzingaImg, JinseImg, ShenlianImg];

const FeaturedOnSection = () => {
    return (
        <section className="torum-featured">
            <div className="torum-featured__main-wrapper">
                <h2 className="torum-featured__title">Featured On</h2>
                <div className="torum-features__divider" />
                <ul className="torum-featured__articles-list">
                    {images.map((image, i) => {
                        return (
                            <li className="torum-featured__list-item" key={i}>
                                <div className="torum-featured__list-item-highlight" />
                                <img className="torum-featured__img" src={image} alt="News Article link" />
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
};

export default FeaturedOnSection;