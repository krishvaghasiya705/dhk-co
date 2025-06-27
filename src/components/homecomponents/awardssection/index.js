import React, { useState, useRef, useEffect } from 'react'
import "./awardssection.scss"
import Commonbutton from '../../commonbutton'
import awardsData from './awardsData'
import gsap from 'gsap'

export default function Awardssection() {
    const [visibleCount, setVisibleCount] = useState(10);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imageY, setImageY] = useState(0);
    const containerRefs = useRef([]);
    const imageRefs = useRef([]);
    const gsapTween = useRef(null);

    const handleMouseMove = (e, idx) => {
        const container = containerRefs.current[idx];
        if (container) {
            const rect = container.getBoundingClientRect();
            const y = e.clientY - rect.top - 0;
            setImageY(y);
            if (imageRefs.current[idx]) {
                if (gsapTween.current) gsapTween.current.kill();
                gsapTween.current = gsap.to(imageRefs.current[idx], {
                    top: y,
                    duration: 0.3,
                    ease: 'power3.out',
                });
            }
        }
    };

    const handleMouseEnter = (idx) => {
        setHoveredIndex(idx);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setImageY(0);
        if (gsapTween.current) gsapTween.current.kill();
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    useEffect(() => {
        return () => {
            if (gsapTween.current) gsapTween.current.kill();
        };
    }, []);

    return (
        <>
            <div className='awards-section-main'>
                <div className="container-full">
                    <div className='awards-section'>
                        <div className='awards-grd-main'>
                            <div className='awards-grd-left blend-mode'>
                                <h3>awards</h3>
                            </div>
                            <div className='awards-grd-right'>
                                <div className='awards-right-flx-col'>
                                    {awardsData.slice(0, visibleCount).map((award, idx) => (
                                        <div
                                            className='awards-right-flx'
                                            key={idx}
                                            ref={el => containerRefs.current[idx] = el}
                                            onMouseMove={e => handleMouseMove(e, idx)}
                                            onMouseEnter={() => handleMouseEnter(idx)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div
                                                className='awards-content-image-main'
                                                ref={el => imageRefs.current[idx] = el}
                                                style={{
                                                    visibility: hoveredIndex === idx ? 'visible' : 'hidden',
                                                    top: hoveredIndex === idx ? imageY : 0,
                                                    left: 0,
                                                    position: 'absolute',
                                                    pointerEvents: 'none',
                                                    transition: 'top 0.1s',
                                                }}
                                            >
                                                <div className="awards-content-image">
                                                    <img src={award.image} alt={award.rightDetail} />
                                                </div>
                                            </div>
                                            <div className='awards-year'>
                                                <span>{award.year}</span>
                                            </div>
                                            <div className='awards-detail'>
                                                <div className='awards-left-details blend-mode'>
                                                    {award.leftDetails.map((txt, i) => (
                                                        <p key={i}>{txt}</p>
                                                    ))}
                                                </div>
                                                <p className='awards-right-details blend-mode'>{award.rightDetail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='loadmore-content-button-main'>
                            {visibleCount < awardsData.length && (
                                <div className='loadmore-content-button' onClick={handleLoadMore}>
                                    <Commonbutton ButtonLink="none" Buttontext="load more" Buttonclass="butonspacefourty" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
