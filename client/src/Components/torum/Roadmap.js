import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MiningImg from "../../assets/torum-assets/images/mining.webp";
import MurotImg from "../../assets/torum-assets/images/murot.webp";
import PremiumImg from "../../assets/torum-assets/images/premium.webp";
import NftImage from "../../assets/torum-assets/images/nft.webp";
import BiddingImg from "../../assets/torum-assets/images/bidding.webp";
import StakingImg from "../../assets/torum-assets/images/defi.webp";

const RoadmapSection = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [breakpoint, setBreakpoint] = useState('');

    const getWindowSize = () => {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener("resize", getWindowSize);

        if (window.innerWidth < 768)
            setBreakpoint('mobile');
        else if (window.innerWidth < 1440)
            setBreakpoint('tablet');
        else
            setBreakpoint('desktop');

        return () => {
            window.removeEventListener("resize", getWindowSize);
        }
    }, []);

    useEffect(() => {
        if (windowSize < 768)
            setBreakpoint('mobile');
        else if (windowSize < 1440)
            setBreakpoint('tablet');
        else
            setBreakpoint('desktop');
    }, [windowSize]);

    const roadmapFeatures = [
        {
            title: "Mining Simulator Video Game",
            image: MiningImg,
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
        {
            title: "DeFi Staking Platform",
            image: StakingImg,
            imageAlt: "de-fi staking"
        },
    ];

    let slidesPerView = 1;

    switch (breakpoint) {
        case 'mobile':
            slidesPerView = 1;
            break;

        case 'tablet':
            slidesPerView = 2;
            break;

        case 'desktop':
            slidesPerView = 3;
            break;
        default:
            slidesPerView = 1;
    }

    return (
        <section className="torum-roadmap">
            <div className="torum-roadmap__main-wrapper">
                <div className="torum-roadmap__text-wrapper">
                    <h2 className="torum-roadmap__title">Our Future Development</h2>
                    <div className="torum-features__divider" />
                    <p className="torum-roadmap__text">
                        Future releases are scheduled to maximize XTM's usability as TORUM transforms into a comprehensive decentralized ecosystem.
                    </p>
                    <span className="torum-roadmap__span">(Swipe or drag click to view more)</span>
                </div>
                <Swiper id="torum-roadmap__features-slider" slidesPerView={slidesPerView}>
                    {roadmapFeatures.map((feature) => {
                        return (
                            <SwiperSlide key={feature.title}>
                                <div className="torum-roadmap__feature-container">
                                    <div className="torum-roadmap__feature-wrapper" key={feature.title}>
                                        <img className="torum-roadmap__feature-img" src={feature.image} alt={feature.imageAlt} />
                                        <h3 className="torum-roadmap__feature-title">{feature.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default RoadmapSection;