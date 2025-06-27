import React, { useState } from 'react'
import "./journalsection.scss"
import Commonbutton from '../../commonbutton';
import { NavLink } from 'react-router-dom';
import journalimage1 from "../../../assets/images/journalimage1.webp"
import journalimage2 from "../../../assets/images/journalimage2.jpg"
import journalimage3 from "../../../assets/images/journalimage3.jpg"
import journalimage4 from "../../../assets/images/journalimage4.jpg"
import journalimage5 from "../../../assets/images/journalimage5.webp"
import Cursorbutton from '../../cursorbutton';

export default function Journalsection() {
    const [cursorBtn, setCursorBtn] = useState({ visible: false, x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorBtn({ visible: true, x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setCursorBtn((prev) => ({ ...prev, visible: false }));
    };

    const featuredProjectsData = [
        {
            id: 1,
            image: journalimage1,
            buttontext: "events",
            contenttitle: "dhk architects to participate in architecture.za",
            contentdescription: "Presented since 2010, the AZA2025 urban festival returns to unite international and local architects, cultural producers, thought leaders, academics and students in the built environment to exchange and discover innovative, alternative and future approaches to design and development.",
            link: "/"
        },
        {
            id: 2,
            image: journalimage2,
            buttontext: "career",
            contenttitle: "current vacancies at dhk",
            contentdescription: "We have various roles open at dhk Architects. Architects, technologists, interior designers and urban designers. Apply today.",
            link: "/"
        },
        {
            id: 3,
            image: journalimage3,
            buttontext: "people",
            contenttitle: "dhk welcomes Norman Foster Institute students and faculty members",
            contentdescription: "dhk Architects welcomed seven students and three faculty members from the Norman Foster Institute to its Cape Town studio to engage and share insights into architecture and urban design.",
            link: "/"
        },
        {
            id: 4,
            image: journalimage4,
            buttontext: "career",
            contenttitle: "meet christiaan van aswegen, one of our newly promoted associates ",
            contentdescription: "Between January and April this year, dhk Architects announced ten promotions, strengthening the senior leadership team and reflecting our strategy of expansion within the studio. Professional Architect Christiaan Van Aswegen is one of the newly promoted team members.",
            link: "/"
        },
        {
            id: 5,
            image: journalimage5,
            buttontext: "studio",
            contenttitle: "our BIM team: keeping the studio at the forefront of digital transformation",
            contentdescription: "At the forefront of our digital transformation journey is our skilled building information modelling (BIM) team.",
            link: "/"
        },
        {
            id: 6,
            isButton: true
        }
    ];
    return (
        <>
            <div className='journal-section-main'>
                <div className="container-full">
                    <div className='journal-section'>
                        <div className='journal-section-title blend-mode'>
                            <h3>journal</h3>
                        </div>
                        <div className='featured-projects-grd'>
                            {featuredProjectsData.map((item, index) => {
                                if (item.isButton) {
                                    return (
                                        <div className='featured-box-main' key={index}>
                                            <div className='view-projects-box-main blend-mode'>
                                                <Commonbutton ButtonLink="/" Buttontext="view more" />
                                            </div>
                                        </div>
                                    );
                                }

                                if (item.isEmpty) {
                                    return <div className='featured-box-main' key={index}></div>;
                                }

                                const boxClass = index === 0 ? '' : 'featured-box-main';

                                return (
                                    <div className={boxClass} key={index}>
                                        <NavLink
                                            to={item.link}
                                            className='featured-box'
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className='featured-box-img'>
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className='featured-box-content'>
                                                <button type='button' className='featured-box-content-button'>{item.buttontext}</button>
                                                <div className='featured-box-content-right'>
                                                    <p className='featured-box-content-title'>{item.contenttitle}</p>
                                                    <p className='featured-box-content-description'>{item.contentdescription}</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Cursorbutton visible={cursorBtn.visible} x={cursorBtn.x} y={cursorBtn.y} />
        </>
    )
}
