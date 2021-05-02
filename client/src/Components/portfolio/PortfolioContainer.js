import React, { useState, useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";


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
            <Header />
            <HeroSection />
            <AboutMe />
            <ProjectsSection />
            <Contact />
        </div>
    );
}

export default PortfolioContainer;
