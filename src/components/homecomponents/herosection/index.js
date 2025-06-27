import React from 'react'
import "./homeherosection.scss"

export default function HomeHerosection() {
    const Hometitles = [
        {
            title: "stay curious, always.",
        },
        {
            title: "collaborate.",
        },
        {
            title: "nurture talent.",
        },
        {
            title: "design for the future.",
        }
    ]
    return (
        <>
            <div className='home-hero-section-main blend-mode'>
                <div className="container2">
                    <div className="home-hero-section">
                        <div className='home-hero-section-left'>
                            <h1>we</h1>
                        </div>
                        <div className='home-hero-section-right'>
                            {Hometitles.map((i, index) => (
                                <h1 key={index}>{i.title}</h1>
                            ))}
                        </div>
                    </div>
                    <div className="home-hero-section">
                        <div className='home-hero-section-left'>
                            <span>Philosophy</span>
                        </div>
                        <div className='home-hero-section-right'>
                            <p>We're fueled by curiosity and creativity. We seek to improve the quality of the built environment with subtle, yet confident designs characterised by clean lines and forms linked inextricably with function. Each design is unique, crafted to add commercial, social and aesthetic value while expressing our responsibility to safeguard the planet, nurture our team and enhance the lives of people who use the spaces we create.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
