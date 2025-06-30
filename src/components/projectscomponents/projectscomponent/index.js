import React, { useRef, useLayoutEffect } from 'react'
import "./projectscomponent.scss"
import projectsimage1 from "../../../assets/images/projectsimage1.webp"
import projectsimage2 from "../../../assets/images/projectsimage2.webp"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
    {
        title: 'Al Marjan',
        location: 'Al Marjan Island, UAE',
        year: '2028',
        image: projectsimage1,
        alt: 'projectsimage1',
    },
    {
        title: 'Canal Plaza',
        location: 'Cape Town, South Africa',
        year: '2027',
        image: projectsimage2,
        alt: 'projectsimage2',
    },
    {
        title: 'Al Marjan',
        location: 'Al Marjan Island, UAE',
        year: '2028',
        image: projectsimage1,
        alt: 'projectsimage1',
    },
    {
        title: 'Canal Plaza',
        location: 'Cape Town, South Africa',
        year: '2027',
        image: projectsimage2,
        alt: 'projectsimage2',
    },
    {
        title: 'Al Marjan',
        location: 'Al Marjan Island, UAE',
        year: '2028',
        image: projectsimage1,
        alt: 'projectsimage1',
    },
    {
        title: 'Canal Plaza',
        location: 'Cape Town, South Africa',
        year: '2027',
        image: projectsimage2,
        alt: 'projectsimage2',
    },
];

export default function Projectscomponent() {
    const rightMainRefs = useRef([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const setupAnimations = () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            rightMainRefs.current.forEach((el, i) => {
                if (!el) return;
                const aspectRatio = 21.38 / 12;
                const width = el.offsetWidth;
                const targetHeight = width / aspectRatio; // height in px

                gsap.fromTo(
                    el,
                    { height: '136px' },
                    {
                        height: `${targetHeight}px`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 70%',
                            end: 'top 30%',
                            scrub: true,
                            markers: false,
                            id: `project-image-${i}`,
                        },
                    }
                );
            });
        };

        setupAnimations();
        window.addEventListener('resize', setupAnimations);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('resize', setupAnimations);
        };
    }, []);

    return (
        <>
            <div className="projects-component-blank"></div>
            <div className="projects-component-main">
                <div className="container-full">
                    <div className='projects-top'>
                        <div className='projects-top-left'>
                            <div className='projects-top-left-flx'>
                                <span className='active'>grid</span>
                                <span>/</span>
                                <span>list</span>
                            </div>
                        </div>
                        <div className='projects-top-right'>
                            <h1>all projects</h1>
                        </div>
                    </div>
                    <div className='projects-bottom-flx'>
                        {projects.map((project, i) => (
                            <div className='projects-bottom' key={i}>
                                <div className='projects-left-main'>
                                    <div className='projects-left-content'>
                                        <p>{project.title}</p>
                                        <p>{project.location}</p>
                                    </div>
                                    <div className='projects-right-content'>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <div className='projects-right-main'>
                                    <div className='projects-right' ref={el => rightMainRefs.current[i] = el}>
                                        <img src={project.image} alt={project.alt} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
