import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
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

    let slide;
    let slides = []

    switch (breakpoint) {
        case 'mobile':
            slide =
                roadmapFeatures.map((feature) => {
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
                })
            break;

        case 'tablet':
            slides = [
                [
                    roadmapFeatures[0],
                    roadmapFeatures[1]
                ],
                [
                    roadmapFeatures[2],
                    roadmapFeatures[3]
                ],
                [
                    roadmapFeatures[4],
                    roadmapFeatures[5]
                ],
            ]

            slide =
                slides.map((slide) => {
                    return (
                        <SwiperSlide>
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={slide[0].title}>
                                    <img className="torum-roadmap__feature-img" src={slide[0].image} alt={slide[0].imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{slide[0].title}</h3>
                                </div>
                            </div>
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={slide[1].title}>
                                    <img className="torum-roadmap__feature-img" src={slide[1].image} alt={slide[1].imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{slide[1].title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                });
            break;

        case 'desktop':
            slides = [
                [
                    roadmapFeatures[0],
                    roadmapFeatures[1],
                    roadmapFeatures[2]
                ],
                [
                    roadmapFeatures[3],
                    roadmapFeatures[4],
                    roadmapFeatures[5]
                ]
            ];

            slide =
                slides.map((slide) => {

                    return (
                        <SwiperSlide key={slide[0].title}>
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={slide[0].title}>
                                    <img className="torum-roadmap__feature-img" src={slide[0].image} alt={slide[0].imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{slide[0].title}</h3>
                                </div>
                            </div>
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={slide[1].title}>
                                    <img className="torum-roadmap__feature-img" src={slide[1].image} alt={slide[1].imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{slide[1].title}</h3>
                                </div>
                            </div>
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={slide[2].title}>
                                    <img className="torum-roadmap__feature-img" src={slide[2].image} alt={slide[2].imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{slide[2].title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                });

            break;
        default:
            slide = [];
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
                    <span className="torum-roadmap__span">(Swipe to view more)</span>
                </div>
                <Swiper id="torum-roadmap__features-slider">
                    {/* {roadmapFeatures.map((feature) => {
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
                    })} */}
                    {slide}
                </Swiper>
                {/* <div className="torum-roadmap__features-slider">
                    {roadmapFeatures.map((feature) => {
                        return (
                            <div className="torum-roadmap__feature-container">
                                <div className="torum-roadmap__feature-wrapper" key={feature.title}>
                                    <img className="torum-roadmap__feature-img" src={feature.image} alt={feature.imageAlt} />
                                    <h3 className="torum-roadmap__feature-title">{feature.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </section>
    )
}

export default RoadmapSection;