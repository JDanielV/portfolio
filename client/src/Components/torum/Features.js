import React from 'react';
import "../../styles/main.css";
import BuildingImg from "../../assets/torum-assets/images/building.webp";
import ControllerImg from "../../assets/torum-assets/images/game-controller.webp";
import AtmosphereImg from "../../assets/torum-assets/images/crypto-atmosphere.webp";
import SatoshiImg from "../../assets/torum-assets/images/gift.webp";
import RewardsImg from "../../assets/torum-assets/images/reward.webp";

const Features = (props) => {

    const sections = [

        {
            title: "Features",
            subtitle: "TORUM is packed with various features and functionalities tailored exclusively for the crypto space.",
            featureOneTitle: "crypto projects listing",
            featureOneImg: {BuildingImg},
            featureOneSubtitle: "For crypto projects to showcase their latest updates.",
            featureTwoTitle: "social gamification",
            featureTwoImg: {ControllerImg},
            featureTwoSubtitle: "Start earning XTM and unite with your crypto buddies.",
            featureThreeTitle: "crypto atmosphere",
            featureThreeImg: {AtmosphereImg},
            featureThreeSubtitle: "Engage and interact with contents using crypto-themed gifts and emotes."
        },
        {
            title: "Introducing XTM",
            subtitle: "XTM is an ERC-20 utility token that acts as the payment medium for various features and functionalities, serving as the backbone of TORUM's ecosystem.",
            featureOneTitle: "support sunctionality",
            featureOneImg: {SatoshiImg},
            featureTwoTitle: "mission rewards",
            featureTwoImg: {RewardsImg},
        },
        
    ];

    return (
        <section className="torum-features">
            {sections.map((section) => {
                return(
            <div className="torum-features__container">
                <div className="torum-features__top-wrapper">
                    <h2 className="torum-features__title">{section.title}</h2>
                    <div className="torum-features__divider" />
                    <span className="torum-features__subtitle">{section.subtitle}</span>
                </div>
                <div className="torum-features__bottom-wrapper">
                    <div className="torum-features__feature-wrapper">
                        <img className="torum-features__feature-img" src="" alt="" />
                        <div className="torum-features__feature-text-wrapper">
                            <h3 className="torum-features__feature-title">Crypto Projects Listing</h3>
                            <span className="torum-features__feature-text">
                                For crypto projects to showcase their latest updates.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                )})}
        </section>
    );
}

export default Features;