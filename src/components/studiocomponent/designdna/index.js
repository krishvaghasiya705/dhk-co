import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./designdna.scss"
import designdnaleftimage1 from "../../../assets/images/designdnaleftimage1.jpg"
import designdnaleftimage2 from "../../../assets/images/designdnaleftimage2.webp"
import designdnarightimage from "../../../assets/images/designdnarightimage.webp"
import Commonbutton from './../../commonbutton/index';

export default function Designdna() {
    const leftImageRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (leftImageRef.current) {
            gsap.fromTo(
                leftImageRef.current,
                { y: 0 },
                {
                    y: "-50%",
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
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: 0 },
                {
                    y: 640,
                    force3D: false,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 80%',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <div className='designdna-main'>
                <div className="container">
                    <div className='designdna-grd-main'>
                        <div className='designdna-header' ref={headerRef}>
                            <div className='designdna-header-left'>
                                <span>Design dna</span>
                            </div>
                            <div className='designdna-header-mid'>
                                <Commonbutton ButtonLink="/projects" Buttontext="our projects" />
                            </div>
                            <div className='designdna-header-right'>
                                <p>Our strength as a design-led studio arises from a unique blend of creative talent, technical capability, implementation expertise and commercial strategy. We have a collaborative mindset and a global outlook. We're always exploring new possibilities in advanced technologies, materials and design forms. We're committed to being involved from first sketch to final construction, adding value at every stage. Each design is intentionally integrated into its unique social, environmental, cultural and functional context with quiet confidence and understated flair.</p>
                            </div>
                        </div>
                        <div className='designdna-grd'>
                            <div className='designdna-left-image' ref={leftImageRef}>
                                <img src={designdnaleftimage1} alt="designdnaleftimage1" />
                                <img src={designdnaleftimage2} alt="designdnaleftimage2" />
                            </div>
                            <div className='designdna-right-image'>
                                <img src={designdnarightimage} alt="designdnarightimage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
