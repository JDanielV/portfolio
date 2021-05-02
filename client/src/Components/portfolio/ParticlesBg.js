import React from 'react';
import "../../styles/main.css";
import Particles from "react-particles-js";
import ParticlesConfig from "../../config/particle-config";

const ParticlesBg = () => {
    return (
        <Particles params={ParticlesConfig} />
    )
};

export default ParticlesBg;