import React from 'react';
import "../../styles/main.css";

const ProjectsSection = () => {
    return (
        <section className="portfolio-projects">
            <h2 className="portfolio-projects__title">Projects</h2>
            <div className="portfolio-projects__project-container">
                <div className="portfolio-projects__project-img-side">
                    <div className="portfolio-projects__project-img-wrapper">
                        <img className="portfolio-projects__project-img" src="" alt="" />
                    </div>
                </div>
                <div className="portfolio-projects__project-info-side">
                    <h3 className="portfolio-projects__project-title"></h3>
                    <p className="portfolio-projects__project-subtitle"></p>
                    <div className="portfolio-projects__project-details-button-wrapper">
                        <span className="portfolio-projects__project-details-button">more info</span>
                        <div className="portfolio-projects__project-details-wrapper">
                            <p className="portfolio-projects__project-details">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProjectsSection;