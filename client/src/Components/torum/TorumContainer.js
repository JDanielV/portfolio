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

function TorumContainer() {

    const [scrollThreshold, setScrollThreshold] = useState({
        scrollThreshold: false
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 99) {
            setScrollThreshold({ scrollThreshold: true });
        };
        if (window.pageYOffset < 100) {
            setScrollThreshold({ scrollThreshold: false });
        }
    };

    return (
        <div className="App">
            <Header scrollThreshold={scrollThreshold.scrollThreshold} />
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
