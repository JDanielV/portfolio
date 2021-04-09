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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        console.log(window.pageYOffset);
    };

    return (
        <div className="App">
            <Header />
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
