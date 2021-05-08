import React from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import TerranovaImage from "../../assets/portfolio-assets/terranova-mobile-cropped.jpg";
import TorumImage from "../../assets/portfolio-assets/torum-mobile-cropped.jpg";
import LightMindImage from "../../assets/portfolio-assets/lightmind-mobile.JPG";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

const ProjectsSection = ({ breakpoint }) => {

    const projectSlides = [
        {
            projectName: "Terranova Sales",
            projectSubtitle: "Front-end, Maps API, back-end",
            projectDescription: "Business based in Downtown Vancouver (Canada). Developed & published their website.",
            projectImage: TerranovaImage,
            projectLink: "https://terranovasales.ca/"
        },
        {
            projectName: "Torum Website (Practice)",
            projectSubtitle: "Front-end",
            projectDescription: "Developed for practice. I have no affiliation with Torum, nor I am endorsing their platform.",
            projectImage: TorumImage,
            projectLink: "/torum"
        },
        {
            projectName: "Light Mind",
            projectSubtitle: "Front-end, UX/UI design, back-end",
            projectDescription: "Entry-logger project built for BrainStation's Web Development Bootcamp program. Still under development.",
            projectImage: LightMindImage,
            projectLink: "https://www.loom.com/share/0346866e010d440a8dd79e73877ce734"
        },
    ]

    let projectsComponent;

    switch (breakpoint) {
        case 'mobile':
            projectsComponent =
                (<Swiper id="portfolio-projects__swiper-container" wrapperTag="ul" pagination spaceBetween={50}>
                    {projectSlides.map((project) => {
                        const internalLink = project.projectLink === "/torum";
                        return (
                            <SwiperSlide tag="li" key={project.projectName}>
                                {internalLink ?
                                    <Link className="portfolio-projects__project-link" to={project.projectLink}>
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <a className="portfolio-projects__project-link" href={project.projectLink} target="_blank" rel="noreferrer">
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                }
                            </SwiperSlide>
                        )
                    })}
                </Swiper>)
            break;
        case 'tablet':
        case 'desktop':
            projectsComponent = (
                <>
                    {projectSlides.map((project) => {
                        const internalLink = project.projectLink === "/torum";

                        return (
                            <div key={project.projectName}>
                                {internalLink ?
                                    <Link className="portfolio-projects__project-link" to={project.projectLink}>
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <a className="portfolio-projects__project-link" href={project.projectLink} target="_blank" rel="noreferrer">
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                }
                            </div>
                        )
                    })}
                </>)
            break;
        default:
            projectsComponent = (
                <>
                    {projectSlides.map((project) => {
                        const internalLink = project.projectLink === "/torum";
                        return (
                            <div key={project.projectName}>
                                {internalLink ?
                                    <Link className="portfolio-projects__project-link" to={project.projectLink}>
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <a className="portfolio-projects__project-link" href={project.projectLink} target="_blank" rel="noreferrer">
                                        <div className="portfolio-projects__project-container">
                                            <div className="portfolio-projects__project-img-side">
                                                <div className="portfolio-projects__project-img-wrapper">
                                                    <img className="portfolio-projects__project-img" src={project.projectImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="portfolio-projects__project-info-side">
                                                <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                                <span className="portfolio-projects__project-subtitle">{project.projectSubtitle}</span>
                                                <div className="portfolio-projects__project-details-button-wrapper">
                                                    <div className="portfolio-projects__project-details-wrapper">
                                                        <p className="portfolio-projects__project-details">
                                                            {project.projectDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                }
                            </div>
                        )
                    })}
                </>)
    }

    return (
        <section className="portfolio-projects" id="projects-section">
            <h2 className="portfolio-projects__title">Projects</h2>
            {projectsComponent}
        </section>
    )
};

export default ProjectsSection;