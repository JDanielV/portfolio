import React from 'react';
import "../../styles/main.css";
import WandIcon from "../../assets/torum-assets/images/lnr-magic-wand.svg";
import DiamondIcon from "../../assets/torum-assets/images/lnr-diamond.svg";
import RocketIcon from "../../assets/torum-assets/images/lnr-rocket.svg";
import DatabaseIcon from "../../assets/torum-assets/images/lnr-database.svg";
import SortIcon from "../../assets/torum-assets/images/lnr-sort-amount-asc.svg";
import ConstructionIcon from "../../assets/torum-assets/images/lnr-construction.svg";

const ComparisonSection = () => {

    const torumFeatures = [
        {
            title: "A Token with Various Use Cases",
            text: "TORUM's ERC-20 utility token - XTM exists for a reason, and is spendable for users to engage in various features and functionalities.",
            icon: WandIcon,
            iconAlt: "wand"
        },
        {
            title: "A Crypto-focused Atmosphere",
            text: "TORUM is packed with crypto-themed features, suitable for both crypto enthusiasts and blockchain projects to nurture communities of similar interest.",
            icon: DiamondIcon,
            iconAlt: "diamond"
        },
        {
            title: "A Comprehensive Decentralized Ecosystem",
            text: "By prioritizing a scalable UI/UX, TORUM aims to shape a comprehensive decentralized crypto ecosystem for the industry in the long run, with a social media platform as its foundation.",
            icon: RocketIcon,
            iconAlt: "rocket"
        }
    ];
    
    const otherCryptoFeatures = [
        {
            title: "Native Cryptocurrencies with Minimal Usability",
            text: "Other than being used for trading and staking purposes, the native cryptocurrencies of most crypto projects do not seem to provide other significant use cases.",
            icon: DatabaseIcon,
            iconAlt: "database"
        },
        {
            title: "Diverged yet Segregated Communities",
            text: "Crypto communities need to realize that unity and coexistence is the fastest way to revolutionize this immature industry and accelerate mass adoption effectively.",
            icon: SortIcon,
            iconAlt: "sort"
        },
        {
            title: "Limited Exposure and Versatility",
            text: "Other than having difficulties to attain their desired target market precisely, most crypto projects failed to expand their user bases and communities due to having a limited extensibility.",
            icon: ConstructionIcon,
            iconAlt: "construction"
        }
    ];
    
    return (
        <section className="comparison">
            <div className="comparison__background-wrapper">
            <div className="comparison__left">
                <div className="comparison__left-content-wrapper">
                    <h3 className="comparison__left-title">
                        What TORUM intends to provide
                    </h3>
                    <div className="comparison__left-features-wrapper">
                        {torumFeatures.map((feature) => {
                            return(
                            <div className="comparison__left-feature-block" key={feature.title}>
                                <div className="comparison__left-image-wrapper">
                                    <img className="comparison__left-image" src={feature.icon} alt={feature.iconAlt} />
                                </div>
                                <div className="comparison__left-subtitle-text-wrapper">
                                    <h4 className="comparison__left-subtitle">
                                        {feature.title}
                                    </h4>
                                    <p className="comparison__left-text">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
            <div className="comparison__vs-wrapper">
                <span className="comparison__vs-text">VS</span>
            </div>
            <div className="comparison__right">
                <div className="comparison__right-content-wrapper">
                    <h3 className="comparison__left-title">
                        Other Crypto Projects
                    </h3>
                    <div className="comparison__left-features-wrapper">
                        {otherCryptoFeatures.map((feature) => {
                            return(
                            <div className="comparison__left-feature-block" key={feature.title}>
                                <div className="comparison__left-image-wrapper">
                                    <img className="comparison__left-image" src={feature.icon} alt={feature.iconAlt} />
                                </div>
                                <div className="comparison__left-subtitle-text-wrapper">
                                    <h4 className="comparison__left-subtitle">
                                        {feature.title}
                                    </h4>
                                    <p className="comparison__left-text">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ComparisonSection;