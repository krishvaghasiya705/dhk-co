import React, { useEffect, useRef } from 'react';
import "./projectscomponent.scss"
import Commonbutton from './../../commonbutton/index';
import Projects from '../projectsdata/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projectscomponent() {
    const projectsRef = useRef([]);
    const imagesRef = useRef([]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        projectsRef.current.forEach((el, i) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top top',
                end: () => `+=${el.offsetHeight}`,
                pin: true,
                pinSpacing: false,
                scrub: true,
                id: `project-pin-${i}`,
            });
            if (imagesRef.current[i]) {
                gsap.fromTo(
                    imagesRef.current[i],
                    { y: 0 },
                    {
                        y: -100,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'bottom bottom',
                            end: () => `+=${el.offsetHeight}`,
                            scrub: true,
                        },
                    }
                );
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div className="projects-component-blank"></div>
            <div className="projects-component-main">
                <div className="container-full">
                    <div className='projects-top'>
                        <div className='projects-top-left'>
                            <div className='projects-top-left-flx blend-mode'>
                                <span className='active'>grid</span>
                                <span>/</span>
                                <span>list</span>
                            </div>
                        </div>
                        <div className='projects-top-right-main'>
                            <div className='projects-top-right blend-mode'>
                                <h1>all projects</h1>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='projects-bottom-flx'>
                        {Projects.map((project, idx) => (
                            <div
                                className='projects-bottom'
                                key={project.title}
                                ref={el => projectsRef.current[idx] = el}
                            >
                                <div className='projects-left-main blend-mode'>
                                    <div className='projects-left-content blend-mode'>
                                        <p>{project.title}</p>
                                        <p>{project.location}</p>
                                    </div>
                                    <div className='projects-right-content blend-mode'>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <div
                                    className='projects-right'
                                    style={{ backgroundImage: `url(${project.image})` }}
                                    ref={el => imagesRef.current[idx] = el}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container-full'>
                <div className='project-redirect-main'>
                    <div></div>
                    <div className='back-to-top-button'>
                        <Commonbutton Buttonclass="butonspacefourty" ButtonLink="none" Buttontext="back to top" onClick={scrollToTop} />
                    </div>
                </div>
            </div>
        </>
    )
}
