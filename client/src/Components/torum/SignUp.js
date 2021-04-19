import React, { useState } from 'react';
import "../../styles/main.css";

const SignUpSection = () => {

    const [buttonHover, setButtonHover] = useState(false);

    return (
        <section className="torum-sign-up">
            <div className="torum-sign-up__main-wrapper">
                <div className="torum-sign-up__title-divider-wrapper">
                    <h2 className="torum-sign-up__title">
                        Sign up now and Start Connecting with Other Crypto Enthusiasts
                </h2>
                    <div className="torum-features__divider" />
                </div>
                <div className="torum-landing__cta-button" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
                    <div className={buttonHover ? "torum-landing__cta-background-hover" : "torum-landing__cta-background"} />
                    <span className="torum-landing__cta-button-text">create a free account</span>
                </div>
            </div>
        </section>
    )
}

export default SignUpSection;