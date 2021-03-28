import React from 'react';
import "../../styles/main.css";
import BuildingImg from "../../assets/torum-assets/images/building.webp";
import ControllerImg from "../../assets/torum-assets/images/game-controller.webp";
import AtmosphereImg from "../../assets/torum-assets/images/crypto-atmosphere.webp";
import SatoshiImg from "../../assets/torum-assets/images/gift.webp";
import RewardsImg from "../../assets/torum-assets/images/reward.webp";

const Features = () => {

    const sections = [
        {
            title: "Features",
            subtitle: "TORUM is packed with various features and functionalities tailored exclusively for the crypto space.",
            features: [
                {
                    title: "crypto projects listing",
                    image: BuildingImg,
                    imageAlt: "building abstract",
                    subtitle: "For crypto projects to showcase their latest updates.",
                },
                {
                    title: "social gamification",
                    image: ControllerImg,
                    imageAlt: "games",
                    subtitle: "Start earning XTM and unite with your crypto buddies.",
                },
                {
                    title: "crypto atmosphere",
                    image: AtmosphereImg,
                    imageAlt: "atmosphere",
                    subtitle: "Engage and interact with contents using crypto-themed gifts and emotes.",
                }
            ],
        },
        {
            title: "Introducing XTM",
            subtitle: "XTM is an ERC-20 utility token that acts as the payment medium for various features and functionalities, serving as the backbone of TORUM's ecosystem.",
            features: [
                {
                    title: "support functionality",
                    image: SatoshiImg,
                    imageAlt: "satoshi gift",
                },
                {
                    title: "mission rewards",
                    image: RewardsImg,
                    imageAlt: "rewards gift",
                },
            ],
        },

    ];

    return (
        <section className="torum-features">
            {sections.map((section) => {
                return (
                    <div className="torum-features__container" key={section.title}>
                        <div className="torum-features__top-wrapper">
                            <h2 className="torum-features__title">{section.title}</h2>
                            <div className="torum-features__divider" />
                            <span className="torum-features__subtitle">{section.subtitle}</span>
                        </div>
                        <div className="torum-features__bottom-wrapper">
                            {section.features.map((feature) => {
                                return (
                                    <div className="torum-features__feature-wrapper" key={feature.title}>
                                        <img className="torum-features__feature-img" src={feature.image} alt={feature.imageAlt} />
                                        <div className="torum-features__feature-text-wrapper">
                                            <h3 className="torum-features__feature-title">{feature.title}</h3>
                                            {feature.subtitle &&
                                                (<span className="torum-features__feature-text">
                                                    {feature.subtitle}
                                                </span>)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Features;