import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./meettheteam.scss"
import Theteamdata from "../theteamdata/theteamdata";

gsap.registerPlugin(ScrollTrigger);

export default function Meettheteam() {
    const containerRef = useRef(null);
    const slidingRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = Theteamdata.length;

    useEffect(() => {
        if (imagesLoaded === totalImages && totalImages > 0) {
            const container = containerRef.current;
            const sliding = slidingRef.current;
            const scrollWidth = sliding.scrollWidth;
            const containerWidth = container.offsetWidth;
            const scrollDistance = scrollWidth - containerWidth;
            let ctx = gsap.context(() => {
                gsap.to(sliding, {
                    x: -scrollDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 0",
                        end: () => `+=${scrollDistance}`,
                        pin: true,
                        pinSpacing: true,
                        scrub: true,
                        anticipatePin: 1,
                    }
                });
            }, container);
            ScrollTrigger.refresh();
            return () => ctx.revert();
        }
    }, [imagesLoaded, totalImages]);

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    return (
        <div className='meet-the-team-stick'>
            <div className='meet-the-team-title-main blend-mode'>
                <div className='meet-the-team-title'>
                    <h1 className='blend-mode'>meet the team</h1>
                </div>
            </div>
            <div className='meet-the-team-main' ref={containerRef}>
                <div className='meet-the-team-relative'>
                    <div className='meet-the-team-sliding-section-main' ref={slidingRef}>
                        <div className='meet-the-team-sliding-section'>
                            {Theteamdata.map((i, index) => (
                                <div className='meet-the-team-box-main cursor-pointer' key={index}>
                                    <div className='meet-the-team-box-img'>
                                        <img src={i.Theteamimage} alt={i.Theteamimage} onLoad={handleImageLoad} />
                                    </div>
                                    <div className='meet-the-team-box-content'>
                                        <p className='blend-mode'>{i.Membername}</p>
                                        <span className='blend-mode'>{i.Memberposition}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
