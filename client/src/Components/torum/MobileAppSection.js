import React from 'react';
import "../../styles/main.css";
import MobilePhoneImg from "../../assets/torum-assets/images/social-mobile.webp";
import NeoIcon from "../../assets/torum-assets/images/neo-icon.webp"
import UsdtIcon from "../../assets/torum-assets/images/usdt-icon.webp"
import TorumCoinIcon from "../../assets/torum-assets/images/torum-coin-icon.webp"
import MoneroIcon from "../../assets/torum-assets/images/monero-icon.webp"
import ShtCoinIcon from "../../assets/torum-assets/images/shtcoin-icon.webp"
import BtcIcon from "../../assets/torum-assets/images/btc-icon.webp"
import EthIcon from "../../assets/torum-assets/images/eth-icon.webp"

const MobileAppSection = () => {

    const coinIconsArray = [
        {
            icon: NeoIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-neo",
            iconAlt: "neo coin"
        },
        {
            icon: UsdtIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-usdt",
            iconAlt: "USDT coin"
        },
        {
            icon: TorumCoinIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-torum",
            iconAlt: "torum coin"
        },
        {
            icon: MoneroIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-monero",
            iconAlt: "monero coin"
        },
        {
            icon: ShtCoinIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-shtcoin",
            iconAlt: "poop coin"
        },
        {
            icon: BtcIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-btc",
            iconAlt: "BTC coin"
        },
        {
            icon: EthIcon,
            iconClass: "torum-mobile-app__right-img-floating-icon-eth",
            iconAlt: "ETH coin"
        },
    ]

    return (
        <div className="torum-mobile-app">
            <div className="torum-mobile-app__left-wrapper">
                <h2 className="torum-mobile-app__title">TORUM's Mobile App</h2>
                <p className="torum-mobile-app__text">TORUM's upcoming app will allow everyone to stay updated with latest crypto news, trends and contents anyplace, anytime without a hassle. Stay tuned for our latest announcement!</p>
                <button className="torum-mobile-app__button">coming soon</button>
            </div>
            <div className="torum-mobile-app__right-wrapper">
                <img className="torum-mobile-app__right-img" src={MobilePhoneImg} alt="mobile app" />
                {coinIconsArray.map((coin) => {
                    return (
                        <img className={coin.iconClass} src={coin.icon} alt={coin.iconAlt} />
                    )
                })}
            </div>
        </div>
    )
}

export default MobileAppSection;