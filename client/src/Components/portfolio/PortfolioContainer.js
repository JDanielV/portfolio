import React, { useState, useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";
import ParticleBg from "./ParticlesBg";


const PortfolioContainer = () => {

    const [portfolioScrollThreshold, setPortfolioScrollThreshold] = useState({
        portfolioScrollThreshold: false
    });

    const [offsetY, setOffsetY] = useState(0);

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

        setOffsetY(window.pageYOffset);
    };

    return (
        <div className="portfolio-container">
            {/* <Particles className="particles-background" params={ParticlesConfig} style={{ transform: `translateY(${offsetY * 0.5}px)` }} /> */}
            <ParticleBg offsetY={offsetY} />
            <Header />
            <HeroSection />
            <AboutMe />
            <ProjectsSection />
            <Contact />
        </div>
    );
}

export default PortfolioContainer;
