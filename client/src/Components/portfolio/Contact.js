import React from 'react';
import "../../styles/main.css";

const Contact = () => {
    return (
        <section className="portfolio-contact">
            <div className="portfolio-contact__main-wrapper">
                <div className="portfolio-contact__left-side-wrapper">
                    <h2 className="portfolio-contact__title">Let's connect!</h2>
                    <div className="portfolio-contact__divider" />
                    <div className="portfolio-contact__contact-info-icons-wrapper">
                        <span className="portfolio-contact__contact-text">Reach out via LinkedIn or send me a message here - I'd love to connect with you!</span>
                        <a className="portfolio-contact__contact-icon-wrapper" href="">
                            <img className="portfolio-contact__icon" src="" alt="linked in link" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-contact__right-side-wrapper">
                    <form className="portfolio-contact__form-wrapper">
                        <div className="portfolio-contact__form-inputs-wrapper">
                            <input type="text" id="contact-name" className="portfolio-contact__form-input" placeholder="*Full Name" />
                            <input type="text" id="contact-company" className="portfolio-contact__form-input" placeholder="Company (optional)" />
                        </div>
                        <input type="text" id="contact-email" className="portfolio-contact__form-input" placeholder="*Email" />
                        <textarea id="contact-message" className="portfolio-contact__form-textarea" placeholder="*Write your message here!" />
                        <button type="submit" className="portfolio-contact__form-button-wrapper">
                            <span className="portfolio-contact__form-button-text">Send</span>
                            <img className="portfolio-contact__form-button-arrow" src="" alt="" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;