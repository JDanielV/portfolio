import React, { useState, useEffect } from 'react';
import LandingSection from "./LandingSection";
import Header from "./Header";
import Features from "./Features";
import MobileAppSection from "./MobileAppSection";
import RoadmapSection from "./Roadmap";
import ComparisonSection from "./ComparisonSection";
import AmbassadorsSection from './Ambassadors';
import FeaturedOnSection from './FeaturedOn';
import SignUpSection from './SignUp';
import FooterSection from './Footer';
import BackToPortfolio from './BackToPortfolio';

const TorumContainer = () => {

    const [scrollThreshold, setScrollThreshold] = useState({
        scrollThreshold: false
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 99) {
            setScrollThreshold({ scrollThreshold: true });
        };
        if (window.pageYOffset === 0) {
            setScrollThreshold({ scrollThreshold: false });
        }
    };

    return (
        <div className="torum-container">
            <Header scrollThreshold={scrollThreshold.scrollThreshold} />
            <BackToPortfolio />
            <LandingSection />
            <Features />
            <MobileAppSection />
            <RoadmapSection />
            <ComparisonSection />
            <FeaturedOnSection />
            <AmbassadorsSection />
            <SignUpSection />
            <FooterSection />
        </div>
    );
}

export default TorumContainer;
