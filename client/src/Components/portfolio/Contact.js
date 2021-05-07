import React from 'react';
import "../../styles/main.css";
import SendArrow from "../../assets/portfolio-assets/send-arrow.svg";

const Contact = () => {
    return (
        <section className="portfolio-contact">
            <div className="portfolio-contact__main-wrapper">
                <div className="portfolio-contact__left-side-wrapper">
                    <h2 className="portfolio-contact__title">Get In Touch</h2>
                    <span className="portfolio-contact__contact-text--bold">Email me:</span>
                    <span className="portfolio-contact__contact-text--highlight">j.danielv@outlook.com</span>
                    <div className="portfolio-contact__divider" />
                    <div className="portfolio-contact__contact-info-icons-wrapper">
                        <span className="portfolio-contact__contact-text">Reach out  to me via Email, LinkedIn or send me a message here - I'd love to connect with you!</span>
                        <a className="portfolio-contact__contact-icon-wrapper" href="">
                            <img className="portfolio-contact__icon" src="" alt="linked in link" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-contact__right-side-wrapper">
                    <form className="portfolio-contact__form-wrapper">
                        <span className="portfolio-contact__form-message-span">Contact Details</span>
                        <div className="portfolio-contact__form-inputs-wrapper">
                            <input type="text" id="contact-name" className="portfolio-contact__form-input" placeholder="*Full Name" />
                            <input type="text" id="contact-email" className="portfolio-contact__form-input" placeholder="*Email" />
                            <input type="text" id="contact-company" className="portfolio-contact__form-input" placeholder="Company (optional)" />
                        </div>
                        <span className="portfolio-contact__form-message-span">Message</span>
                        <textarea id="contact-message" className="portfolio-contact__form-textarea" placeholder="*How's your day going?" />
                        <button type="submit" className="portfolio-contact__form-button-wrapper">
                            <span className="portfolio-contact__form-button-text">Send</span>
                            <img className="portfolio-contact__form-button-arrow" src={SendArrow} alt="send message" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;