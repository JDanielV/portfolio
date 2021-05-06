import React from 'react';
import "../../styles/main.css";
import Particles from "react-particles-js";
import ParticlesConfig from "../../config/particle-config";

const ParticlesBg = ({ offsetY }) => {
    return (
        <div className="particles-background-container" style={{ transform: `translateY(-${offsetY * .05}px)` }} >
            <Particles className="particles-background" params={ParticlesConfig} />
        </div>
    )
};

export default ParticlesBg;