import React from 'react';
import "../../styles/main.css";
import Particles from "react-particles-js";
import ParticlesConfigMobile from "../../config/particle-config-mobile";
import ParticlesConfigDesktop from "../../config/particle-config-desktop";

const ParticlesBg = ({ offsetY, breakpoint }) => {
    return (
        <div className="particles-background-container" style={{ transform: `translateY(-${offsetY * .05}px)` }} >
            <Particles className="particles-background" params={breakpoint === "desktop" ? ParticlesConfigDesktop : ParticlesConfigMobile} />
        </div>
    )
};

export default ParticlesBg;