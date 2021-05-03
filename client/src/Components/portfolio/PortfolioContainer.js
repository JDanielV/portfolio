import React, { useState, useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";
import ParticleBg from "./ParticlesBg";
import Particles from "react-particles-js";
import ParticlesConfig from "../../config/particle-config";


const PortfolioContainer = () => {

    const [portfolioScrollThreshold, setPortfolioScrollThreshold] = useState({
        portfolioScrollThreshold: false
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 99) {
            setPortfolioScrollThreshold({ portfolioScrollThreshold: true });
        };
        if (window.pageYOffset === 0) {
            setPortfolioScrollThreshold({ portfolioScrollThreshold: false });
        }
    };

    return (
        <div className="portfolio-container">
            <Particles className="particles-background" params={ParticlesConfig} />
            <Header />
            <HeroSection />
            <AboutMe />
            <ProjectsSection />
            <Contact />
        </div>
    );
}

export default PortfolioContainer;
