import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./whywork.scss";
import whyworkimage1 from "../../../assets/images/whyworkimage1.webp";
import whyworkimage2 from "../../../assets/images/whyworkimage2.webp";
import whyworkimage3 from "../../../assets/images/whyworkimage3.webp";
import Commonbutton from './../../commonbutton/index';

export default function Whywork() {
    const leftImageRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = 3;

    useEffect(() => {
        if (imagesLoaded === totalImages) {
            gsap.registerPlugin(ScrollTrigger);
            if (leftImageRef.current) {
                gsap.fromTo(
                    leftImageRef.current,
                    { y: 0 },
                    {
                        y: "-25%",
                        force3D: false,
                        scrollTrigger: {
                            trigger: leftImageRef.current,
                            start: 'top 30%',
                            end: 'bottom top',
                            scrub: true,
                        },
                    }
                );
            }
            ScrollTrigger.refresh();
        }
    }, [imagesLoaded]);

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    return (
        <div className='why-work-main'>
            <div className="container">
                <div className='why-work-grd'>
                    <div className='why-work-grd-left' ref={leftImageRef}>
                        <div className='why-work-img'>
                            <img src={whyworkimage1} alt="whyworkimage1" onLoad={handleImageLoad} />
                        </div>
                        <div className='why-work-box-main'>
                            <div className='why-work-box'>
                                <div className='why-work-title'>
                                    <h4>why work at dhk?</h4>
                                </div>
                                <div className='why-work-content'>
                                    <div className='why-work-para'>
                                        <p>Building a leading studio at the forefront of our industry is about more than producing outstanding design. It’s also about building an outstanding team.</p>
                                        <p>In the studio, we actively cultivate a stimulating environment where people want to work. A studio that grows talent, challenges ideas and supports innovative engagement. It’s a diverse, creative environment that offers opportunities for personal and professional growth.</p>
                                        <p>We foster a culture of progressive design, high-performance and future-focused thinking that positively impacts the lives and careers of our people. We encourage our teams to test ideas and embrace new technologies, materials, sustainability principles and new methods of design and construction.</p>
                                        <p>We support the development of future talent through our involvement in the industry-wide Go for Gold initiative, as well as mentorship, training and development programmes. We create connections with peers and colleagues outside the office through sporting and social events – and we make great coffee!</p>
                                    </div>
                                    <Commonbutton ButtonLink="https://dhk.zohorecruit.com/jobs/Careers" LinkTarget="__blank" Buttontext="work with us" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='why-work-grd-right'>
                        <div className='why-work-img'>
                            <img src={whyworkimage2} alt="whyworkimage2" onLoad={handleImageLoad} />
                        </div>
                        <div className='why-work-img'>
                            <img src={whyworkimage3} alt="whyworkimage3" onLoad={handleImageLoad} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
