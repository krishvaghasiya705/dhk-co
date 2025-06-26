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
            <div className='home-hero-section-main'>
                <div className="container2">
                    <div className="home-hero-section">
                        <div>
                            <h1 className='home-hero-section-left'>we</h1>
                        </div>
                        <div className='home-hero-section-right'>
                            {Hometitles.map((i, index) => (
                                <h1 key={index}>{i.title}</h1>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
