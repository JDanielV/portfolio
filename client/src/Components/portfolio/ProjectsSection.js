import React, { useState, useEffect } from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import TerranovaImage from "../../assets/portfolio-assets/mckup_terranovasales_phone_01.png";
import TerranovaImageDesktop from "../../assets/portfolio-assets/mckup_terranovasales_laptop_01_web.png";
import TorumImage from "../../assets/portfolio-assets/mckup_torum_phone_01.png";
import LightMindImage from "../../assets/portfolio-assets/mckup_lightmind_phone_01.png";
import GitHubIcon from "../../assets/portfolio-assets/github.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


SwiperCore.use([Pagination]);

const ProjectsSection = ({ breakpoint }) => {

    const [triggerAosInit, setTriggerAosInit] = useState(false);

    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setTriggerAosInit(!triggerAosInit);
        }, 5);
    }, []);

    useEffect(() => {
        AOS.init();
    }, [triggerAosInit]);

    const projectSlides = [
        {
            projectName: "Terranova Sales",
            projectSubtitle: "Front-end, Maps API, back-end",
            projectDescription: "Manufacturer's Representative Business based in Downtown Vancouver (Canada). Developed & published their website.",
            projectImage: breakpoint === "mobile" ? TerranovaImage : TerranovaImageDesktop,
            projectLink: "https://terranovasales.ca/"
        },
        {
            projectName: "Torum Website (Practice)",
            projectSubtitle: "Front-end",
            projectDescription: "Re-built from the ground up for practice. I have no affiliation with Torum or its team.",
            projectImage: TorumImage,
            projectLink: "/torum"
        },
        {
            projectName: "Light Mind (Video)",
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
        case 'laptop':
        case 'desktop':
            projectsComponent = (
                <>
                    {projectSlides.map((project) => {
                        const internalLink = project.projectLink === "/torum";

                        return (
                            <div key={project.projectName} data-aos={project.projectLink === "/torum" ? "fade-left" : "fade-right"} data-aos-duration={project.projectName === "Light Mind (Video)" ? "1000" : "500"} data-aos-once="true">
                                {internalLink ?
                                    <Link className="portfolio-projects__project-link" to={project.projectLink}>
                                        <div className="portfolio-projects__project-container" style={{ flexDirection: "row-reverse" }}>
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

            <div className="portfolio-projects__subtitle">
                {breakpoint === "mobile" ? "Swipe" : "Browse"} through some of the projects I've built. For the details on the development of each of them, please refer to the README file in my <a className="portfolio-projects__github-icon-link" href="https://github.com/JDanielV/portfolio" target="_blank" rel="noreferrer">GitHub repository
                    <img className="portfolio-projects__github-icon" src={GitHubIcon} alt="github link" />
                </a>.
            </div>
            {projectsComponent}
        </section>
    )
};

export default ProjectsSection;