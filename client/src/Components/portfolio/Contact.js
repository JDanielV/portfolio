import React, { useState } from 'react';
import "../../styles/main.css";
import SendArrow from "../../assets/portfolio-assets/send-arrow.svg";
import LinkedInIcon from "../../assets/portfolio-assets/linkedin.svg";
import axios from "axios";

const Contact = () => {

    const [contactFormValues, setContactFormValues] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [messageSent, setMessageSent] = useState(false);
    const [emptyFieldsPrompt, setEmptyFieldsPrompt] = useState(false);

    const handleSendMessageToggle = () => {
        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 4000);
    }

    const handleContactFormValues = (e) => {

        switch (e.target.name) {
            case 'name':
                setContactFormValues({
                    ...contactFormValues,
                    name: e.target.value
                });
                break;
            case 'email':
                setContactFormValues({
                    ...contactFormValues,
                    email: e.target.value
                });
                break;
            case 'company':
                setContactFormValues({
                    ...contactFormValues,
                    company: e.target.value
                });
                break;
            case 'message':
                setContactFormValues({
                    ...contactFormValues,
                    message: e.target.value
                });
                break;
        }
    };

    const resetForm = () => {
        document.getElementById("contact-form").reset();
    };

    const submitContactForm = (e) => {
        e.preventDefault();

        if (contactFormValues.name && contactFormValues.email && contactFormValues.message) {
            console.log(contactFormValues);
            axios
                .post("http://localhost:5000/send", contactFormValues)
                .then((response) => {
                    console.log(response);
                    handleSendMessageToggle();
                    resetForm();
                })
                .catch((err) => {
                    console.log(err);
                    setMessageSent(false);
                });
        }
        else {
            console.log("Fill all required fields");
            setEmptyFieldsPrompt(true);
        }
    }

    return (
        <section className="portfolio-contact" id="contact-section">
            <h2 className="portfolio-contact__title">Get In Touch</h2>
            <div className="portfolio-contact__main-wrapper">
                <div className="portfolio-contact__left-side-wrapper">
                    <span className="portfolio-contact__contact-text--bold">Email me:</span>
                    <span className="portfolio-contact__contact-text--highlight">j.danielv@outlook.com</span>
                    <div className="portfolio-contact__divider" />
                    <div className="portfolio-contact__contact-info-icons-wrapper">
                        <span className="portfolio-contact__contact-text">Reach out  to me via Email, LinkedIn or send me a message here - I'd love to connect with you!</span>
                        <a className="portfolio-contact__contact-icon-wrapper" href="https://www.linkedin.com/in/daniel-villaverde/" target="_blank" rel="noreferrer">
                            <img className="portfolio-contact__icon" src={LinkedInIcon} alt="linked in link" />
                        </a>
                    </div>
                </div>
                <div className="portfolio-contact__right-side-wrapper">
                    <form className="portfolio-contact__form-wrapper" id="contact-form" onSubmit={submitContactForm}>
                        <div>
                            <span className="portfolio-contact__form-message-span">Contact Details</span>
                            <div className="portfolio-contact__form-inputs-wrapper">
                                <input type="text" name="name" className="portfolio-contact__form-input" placeholder="*Full Name" onChange={handleContactFormValues} />
                                <input type="text" name="email" className="portfolio-contact__form-input" placeholder="*Email" onChange={handleContactFormValues} />
                                <input type="text" name="company" className="portfolio-contact__form-input" placeholder="Company (optional)" onChange={handleContactFormValues} />
                            </div>
                        </div>
                        <div>
                            <span className="portfolio-contact__form-message-span">Message</span>
                            <textarea type="text" name="message" className="portfolio-contact__form-textarea" placeholder="*How's your day going?" onChange={handleContactFormValues} />
                        </div>
                        <button type="submit" className="portfolio-contact__form-button-wrapper" >
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