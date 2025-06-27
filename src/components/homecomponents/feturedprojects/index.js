import React, { useState } from 'react'
import "./featuredprojects.scss"
import { NavLink } from 'react-router-dom'
import featuredimage1 from "../../../assets/images/featuredimage1.jpg"
import featuredimage2 from "../../../assets/images/featuredimage2.jpg"
import featuredimage3 from "../../../assets/images/featuredimage3.webp"
import featuredimage4 from "../../../assets/images/featuredimage4.webp"
import featuredimage5 from "../../../assets/images/featuredimage5.webp"
import Cursorbutton from '../../cursorbutton'
import Commonbutton from '../../commonbutton'

export default function Featuredprojects() {
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
            image: featuredimage1,
            title: "Longkloof Precinct",
            year: "2024",
            link: "/"
        },
        {
            id: 2,
            image: featuredimage2,
            title: "Olympus Sandton",
            year: "2027",
            link: "/"
        },
        {
            id: 3,
            image: featuredimage3,
            title: "Al Marjan",
            year: "2028",
            link: "/"
        },
        {
            id: 4,
            isButton: true
        },
        {
            id: 5,
            isEmpty: true
        },
        {
            id: 6,
            image: featuredimage4,
            title: "Ahmed Baba Institute",
            year: "2009",
            link: "/"
        },
        {
            id: 7,
            image: featuredimage5,
            title: "The Signature",
            year: "2027",
            link: "/"
        }
    ];

    return (
        <>
            <div className='featured-projects-main'>
                <div className="container-full">
                    <div className='featured-projects-title blend-mode'>
                        <div></div>
                        <h2>featured projects</h2>
                    </div>
                    <div className='featured-projects-grd'>
                        {featuredProjectsData.map((item, index) => {
                            if (item.isButton) {
                                return (
                                    <div className='featured-box-main' key={index}>
                                        <div className='view-projects-box-main blend-mode'>
                                            <Commonbutton ButtonLink="/" Buttontext="view all projects" />
                                        </div>
                                    </div>
                                );
                            }

                            if (item.isEmpty) {
                                return <div className='featured-box-main' key={index}></div>;
                            }

                            const boxClass = index === 0 ? 'featured-image-full' : 'featured-box-main';

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
                                            <p>{item.title}</p>
                                            <span>{item.year}</span>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Cursorbutton visible={cursorBtn.visible} x={cursorBtn.x} y={cursorBtn.y} />
        </>
    );
}
