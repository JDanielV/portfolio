import React from 'react';
import "../../styles/main.css";
import MiningImg from "../../assets/torum-assets/images/mining.webp";
import MurotImg from "../../assets/torum-assets/images/murot.webp";
import PremiumImg from "../../assets/torum-assets/images/premium.webp";
import NftImage from "../../assets/torum-assets/images/nft.webp";
import BiddingImg from "../../assets/torum-assets/images/bidding.webp";

const roadmapFeatures = () => [
    {
        title: "Mining Simulator Video Game",
        image: { MiningImg },
        imageAlt: "mining simulator"
    },
    {
        title: "Murot Marketplace",
        image: MurotImg,
        imageAlt: "doge"
    },
    {
        title: "Premium Subscription",
        image: PremiumImg,
        imageAlt: "premium coin"
    },
    {
        title: "NFT Marketplace",
        image: NftImage,
        imageAlt: "NFT marketplace"
    },
    {
        title: "Advertisement Bidding",
        image: BiddingImg,
        imageAlt: "bidding"
    },
];

const RoadmapSection = () => {
    return (
        <section className="torum-roadmap">
            <div className="torum-roadmap__main-wrapper">
                <div className="torum-roadmap__text-wrapper">
                    <h2 className="torum-roadmap__title">Our Future Development</h2>
                    <div className="torum-features__divider" />
                    <p className="torum-roadmap__text">
                        Future releases are scheduled to maximize XTM's usability as TORUM transforms into a comprehensive decentralized ecosystem.
                    </p>
                    <span className="torum-roadmap__span">(Use arrows to scroll roadmap features)</span>
                </div>
                <div className="torum-roadmap__features-slider">
                    {roadmapFeatures.map((feature) => {
                        return (
                            <div className="torum-roadmap__feature-wrapper">
                                <img className="torum-roadmap__feature-img" src={feature.image} alt={feature.imageAlt} />
                                <h3 className="torum-roadmap__feature-title">{feature.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection;