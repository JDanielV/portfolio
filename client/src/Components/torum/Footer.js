import React from 'react';
import "../../styles/main.css";
import FacebookIcon from "../../assets/torum-assets/images/facebook.png";
import TwitterIcon from "../../assets/torum-assets/images/twitter.png";
import TorumIcon from "../../assets/torum-assets/images/torum.png";
import LinkedInIcon from "../../assets/torum-assets/images/linkedIn.png";
import TelegramIcon from "../../assets/torum-assets/images/telegram.png";
import DiscordIcon from "../../assets/torum-assets/images/discord.png";
import RedditIcon from "../../assets/torum-assets/images/reddit.png";
import InstagramIcon from "../../assets/torum-assets/images/instagram.png";
import PeakdIcon from "../../assets/torum-assets/images/peakd.png";
import MediumIcon from "../../assets/torum-assets/images/medium.png";


const FooterSection = () => {

    const footerIcons = [
        {
            icon: FacebookIcon,
            iconAlt: 'facebook'
        },
        {
            icon: TwitterIcon,
            iconAlt: 'twitter'
        },
        {
            icon: TorumIcon,
            iconAlt: 'torum'
        },
        {
            icon: LinkedInIcon,
            iconAlt: 'linked in'
        },
        {
            icon: TelegramIcon,
            iconAlt: 'telegram'
        },
        {
            icon: DiscordIcon,
            iconAlt: 'discord'
        },
        {
            icon: RedditIcon,
            iconAlt: 'reddit'
        },
        {
            icon: InstagramIcon,
            iconAlt: 'instagram'
        },
        {
            icon: PeakdIcon,
            iconAlt: 'peaked'
        },
        {
            icon: MediumIcon,
            iconAlt: 'medium'
        },
    ];

    return (
        <section className="torum-footer">
            <div className="torum-footer__text-wrapper">
                <span className="torum-footer__text">
                    Copyright © 2021, Torum Technology Sdn. Bhd. (1304379-K)
            </span>
            </div>
            <div className="torum-footer__icons-wrapper">
                {footerIcons.map((icon) => {
                    return (
                        <img className="torum-footer__icon" src={icon.icon} alt={icon.iconAlt} />
                    )
                })}
            </div>
        </section>
    )
}

export default FooterSection;