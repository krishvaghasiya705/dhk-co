import React, { useState, useRef, useEffect } from 'react';
import "./projectdetails.scss"
import projects from '../projectsdata/data';
import Cursorbutton from '../../cursorbutton';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function formatTitleForUrl(title) {
    return title.replace(/\s+/g, '-').toLowerCase();
}

export default function Projectdetail({ title }) {
    const [cursorBtn, setCursorBtn] = useState({ visible: false, x: 0, y: 0 });
    const sliderRef = useRef(null);
    const sliderMainRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const project = projects.find(
        p => formatTitleForUrl(p.title) === title
    );

    // Count total images
    const totalImages = project?.pagedata?.[0]?.sliderdata?.length || 0;

    useEffect(() => {
        if (!project || imagesLoaded < totalImages) return;
        const slider = sliderRef.current;
        const sliderMain = sliderMainRef.current;
        if (!slider || !sliderMain) return;
        const totalWidth = slider.scrollWidth;
        const visibleWidth = sliderMain.offsetWidth;
        gsap.set(slider, { width: totalWidth });

        if (totalWidth > visibleWidth) {
            let ctx = gsap.context(() => {
                gsap.to(slider, {
                    x: () => `-${totalWidth - visibleWidth}`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sliderMain,
                        start: 'top 77',
                        end: () => `+=${totalWidth - visibleWidth}`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        markers: false,
                    },
                });
            }, sliderMain);
            return () => ctx.revert();
        }
    }, [title, project, imagesLoaded, totalImages]);

    if (!project) {
        return <div>Project not found</div>;
    }

    const handleMouseMove = (e) => {
        setCursorBtn({ visible: true, x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setCursorBtn((prev) => ({ ...prev, visible: false }));
    };

    // Find current and next project index
    const currentIndex = projects.findIndex(p => formatTitleForUrl(p.title) === title);
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProjectTitle = formatTitleForUrl(projects[nextIndex].title);

    return (
        <>
            {/* <button onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>Back</button> */}
            <div className="project-detail-main">
                <div className='projects-details-slider-main' ref={sliderMainRef}>
                    <div className='projects-details-slider' ref={sliderRef}>
                        {project.pagedata && project.pagedata[0] && project.pagedata[0].sliderdata && project.pagedata[0].sliderdata.length > 0 ? (
                            project.pagedata[0].sliderdata.map((slide, idx) => {
                                const isLast = idx === project.pagedata[0].sliderdata.length - 1;
                                const content = (
                                    <>
                                        <img
                                            src={slide.image}
                                            alt={slide.title || `slide-${idx + 1}`}
                                            onLoad={() => setImagesLoaded(count => count + 1)}
                                        />
                                        <div className='projects-slider-content'>
                                            {slide.number && <span>{slide.number}</span>}
                                            {slide.title && <p>{slide.title}</p>}
                                        </div>
                                    </>
                                );
                                if (isLast) {
                                    return (
                                        <NavLink
                                            key={idx}
                                            className="projects-slider-item"
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                            to={`/projects/${nextProjectTitle}`}
                                        >
                                            {content}
                                        </NavLink>
                                    );
                                } else {
                                    return (
                                        <div key={idx} className="projects-slider-item">
                                            {content}
                                        </div>
                                    );
                                }
                            })
                        ) : (
                            <div>No slider data available.</div>
                        )}
                    </div>
                </div>
            </div>
            <Cursorbutton visible={cursorBtn.visible} x={cursorBtn.x} y={cursorBtn.y} />
        </>
    );
} 