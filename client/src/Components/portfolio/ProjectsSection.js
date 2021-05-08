import React from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import TerranovaImage from "../../assets/portfolio-assets/terranova-mobile-cropped.jpg";
import TorumImage from "../../assets/portfolio-assets/torum-mobile-cropped.jpg";
import LightMindImage from "../../assets/portfolio-assets/lightmind-mobile.JPG";

SwiperCore.use([Pagination]);

const ProjectsSection = ({ breakpoint }) => {

    const projectSlides = [
        {
            projectName: "Terranova Sales",
            projectSubtitle: "Front-end, Maps API, back-end",
            projectDescription: "Business based in Downtown Vancouver (Canada). Developed & published their website.",
            projectImage: TerranovaImage
        },
        {
            projectName: "Light Mind",
            projectSubtitle: "Front-end, UX/UI design, back-end",
            projectDescription: "Entry-logger project built for BrainStation's Web Development Bootcamp program. Still under development.",
            projectImage: LightMindImage
        },
        {
            projectName: "Torum Website (Practice)",
            projectSubtitle: "Front-end",
            projectDescription: "Developed for practice. I have no affiliation to Torum, nor I am endorsing their platform.",
            projectImage: TorumImage
        },
    ]

    let projectsComponent;

    switch (breakpoint) {
        case 'mobile':
            projectsComponent = (<Swiper id="portfolio-projects__swiper-container" wrapperTag="ul" pagination spaceBetween={50}>
                {projectSlides.map((project) => {
                    return (
                        <SwiperSlide tag="li" key={project.projectName}>
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
                        </SwiperSlide>
                    )
                })}
            </Swiper>)
            break;
        case 'tablet':
        case 'desktop':
            projectsComponent = (
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
            );
            break;
        default:
            projectsComponent = (
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
            );
    }

    return (
        <section className="portfolio-projects">
            <h2 className="portfolio-projects__title">Projects</h2>
            {projectsComponent}
        </section>
    )
};

export default ProjectsSection;