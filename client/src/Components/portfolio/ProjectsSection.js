import React from 'react';
import "../../styles/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const ProjectsSection = ({ breakpoint }) => {

    const projectSlides = [
        {
            projectName: "Terranova Sales",
            projectDescription: "Terranova Sales is a Manufacturer's Representative business based in Downtown Vancouver (Canada). I developed & published their website.",
            projectImage: ""
        },
        {
            projectName: "Light Mind",
            projectDescription: "Project built for BrainStation's Web Development Bootcamp program in 2020.",
            projectImage: ""
        },
        {
            projectName: "Torum Website (Practice)",
            projectDescription: "Built this as pratice based on their existing website. I have no affiliation to this project nor I am endorsing their platform.",
            projectImage: ""
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
                                        <img className="portfolio-projects__project-img" src="" alt="" />
                                    </div>
                                </div>
                                <div className="portfolio-projects__project-info-side">
                                    <h3 className="portfolio-projects__project-title">{project.projectName}</h3>
                                    <p className="portfolio-projects__project-subtitle"></p>
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