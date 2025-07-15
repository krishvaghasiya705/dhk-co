import React, { useState } from 'react';
import "./contactusimages.scss";
import contactusimage1 from "../../../assets/images/contactusimage1.webp";
import contactusimage2 from "../../../assets/images/contactusimage2.webp";
import contactusimage3 from "../../../assets/images/contactusimage3.webp";
import contactusimage4 from "../../../assets/images/contactusimage4.webp";
import contactusimage5 from "../../../assets/images/contactusimage5.webp";

export default function Contactusimages() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const Contactusimages = [
        { contactimage: contactusimage1 },
        { contactimage: contactusimage2 },
        { contactimage: contactusimage3 },
        { contactimage: contactusimage4 },
        { contactimage: contactusimage5 },
    ];

    return (
        <div className='contact-us-images-section-main'>
            <div className="container-full">
                <div className='contact-us-images-flx-main'>
                    {Contactusimages.map((i, index) => {
                        const isActive = hoveredIndex === index || (hoveredIndex === null && activeIndex === index);
                        return (
                            <div
                                key={index}
                                className={`contact-us-images-flx-box ${isActive ? 'active' : ''}`}
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setActiveIndex(index);
                                }}
                                onMouseLeave={() => {
                                    setHoveredIndex(null);
                                }}
                            >
                                <div className='contact-us-image-main'>
                                    <div className='contact-us-image cursor-pointer'>
                                        <img src={i.contactimage} alt="contactus-image" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
