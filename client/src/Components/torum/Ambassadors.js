import React from 'react';
import "../../styles/main.css";
import ProfilePic1 from "../../assets/torum-assets/images/profile-pic1.webp";
import ProfilePic2 from "../../assets/torum-assets/images/profile-pic2.webp";
import ProfilePic3 from "../../assets/torum-assets/images/profile-pic3.webp";
import ProfilePic4 from "../../assets/torum-assets/images/profile-pic4.webp";
import ProfilePic5 from "../../assets/torum-assets/images/profile-pic5.webp";
import ProfilePic6 from "../../assets/torum-assets/images/profile-pic6.webp";
import ProfilePic7 from "../../assets/torum-assets/images/profile-pic7.webp";
import ProfilePic8 from "../../assets/torum-assets/images/profile-pic8.webp";
import ProfilePic9 from "../../assets/torum-assets/images/profile-pic9.webp";
import ProfilePic10 from "../../assets/torum-assets/images/profile-pic10.webp";
import ProfilePic11 from "../../assets/torum-assets/images/profile-pic11.webp";
import ProfilePic12 from "../../assets/torum-assets/images/profile-pic12.webp";
import ProfilePic13 from "../../assets/torum-assets/images/profile-pic13.webp";
import ProfilePic14 from "../../assets/torum-assets/images/profile-pic14.webp";
import ProfilePic15 from "../../assets/torum-assets/images/profile-pic15.webp";
import ProfilePic16 from "../../assets/torum-assets/images/profile-pic16.webp";
import WorldSpinImg from "../../assets/torum-assets/images/world-spin.png";

const AmbassadorsSection = () => {

    const ambassadorsList = [
        {
            profilePic: ProfilePic1,
            name: "@makeitreal",
            location: "Italy",
        },
        {
            profilePic: ProfilePic2,
            name: "@felixyu",
            location: "Malaysa",
        },
        {
            profilePic: ProfilePic3,
            name: "@yxooi123",
            location: "Malaysa",
        },
        {
            profilePic: ProfilePic4,
            name: "@knowhow92",
            location: "Greece",
        },
        {
            profilePic: ProfilePic5,
            name: "@cgrave",
            location: "Singapore",
        },
        {
            profilePic: ProfilePic6,
            name: "@fetinafety",
            location: "Madagascar",
        },
        {
            profilePic: ProfilePic7,
            name: "@hery0823",
            location: "Indonesia",
        },
        {
            profilePic: ProfilePic8,
            name: "@theboi",
            location: "Latvia",
        },
        {
            profilePic: ProfilePic9,
            name: "@jeffreycheah",
            location: "Malaysa",
        },
        {
            profilePic: ProfilePic10,
            name: "@0fajarpurnama0",
            location: "Indonesia",
        },
        {
            profilePic: ProfilePic11,
            name: "@opadia",
            location: "France",
        },
        {
            profilePic: ProfilePic12,
            name: "@raveetrades",
            location: "India",
        },
        {
            profilePic: ProfilePic13,
            name: "@katerinaramm",
            location: "Greece",
        },
        {
            profilePic: ProfilePic14,
            name: "@chriss",
            location: "France",
        },
        {
            profilePic: ProfilePic15,
            name: "@bahagiaarbi",
            location: "Indonesia",
        },
        {
            profilePic: ProfilePic16,
            name: "@wumeepope",
            location: "Nigeria",
        },
    ];

    return (
        <section className="torum-ambassadors">
            <div className="torum-ambassadors__main-wrapper">
                <h2 className="torum-ambassadors__title">
                    Meet TORUM's Ambassadors
                </h2>
                <div className="torum-features__divider"/>
                <div className="torum-ambassadors__text-wrapper">
                    <p className="torum-ambassadors__text">
                    We are proud to announce our honorable yet talented Ambassadors originate from different parts of the world, exclusively handpicked by TORUM's founding team. The list goes on as TORUM expands in the near future.
                    </p>
                </div>
                <ul className="torum-ambassadors__list-wrapper">
                    {ambassadorsList.map((ambassador) => {
                        return (
                            <li className="torum-ambassadors__list-item" key={ambassador.name}>
                        <div className="torum-ambassadors__item-imgs-wrapper">
                            <img className="torum-ambassadors__item-img1" src={ambassador.profilePic} alt="ambassador profile pic"/>
                            <img className="torum-ambassadors__item-img2" src={WorldSpinImg} alt="world spin"/>
                        </div>
                        <div className="torum-ambassadors__item-name-wrapper">
                            <span className="torum-ambassadors__item-name">
                                {ambassador.name}
                            </span>
                        </div>
                        <span className="torum-ambassadors__item-subtitle">
                            {ambassador.location}
                        </span>
                    </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
;}

export default AmbassadorsSection;