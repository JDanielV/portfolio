import React, { useState, useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import Contact from "./Contact";

const PortfolioContainer = () => {

    const [portfolioScrollThreshold, setPortfolioScrollThreshold] = useState(false);

    const [offsetY, setOffsetY] = useState(0);

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


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 99) {
            setPortfolioScrollThreshold(true);
        };
        if (window.pageYOffset === 0) {
            setPortfolioScrollThreshold(false);
        }

        setOffsetY(window.pageYOffset);
    };

    return (
        <div className="portfolio-container">
            <Header breakpoint={breakpoint} portfolioScrollThreshold={portfolioScrollThreshold} />
            <HeroSection />
            <AboutMe />
            <ProjectsSection breakpoint={breakpoint} />
            <Contact />
        </div>
    );
}

export default PortfolioContainer;
