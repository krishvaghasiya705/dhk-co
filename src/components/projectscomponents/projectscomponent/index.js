import React, { useEffect, useRef, useState } from 'react';
import "./projectscomponent.scss"
import Commonbutton from './../../commonbutton/index';
import Projects from '../projectsdata/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Projectscomponent() {
    const projectsRef = useRef([]);
    const imagesRef = useRef([]);
    const [viewMode, setViewMode] = useState('grid');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        // Clean up any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (viewMode === 'grid') {
            projectsRef.current.forEach((el, i) => {
                if (!el) return;
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
        }
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [viewMode]);

    return (
        <>
            <div className="projects-component-blank"></div>
            <div className="projects-component-main">
                <div className="container-full">
                    <div className='projects-top'>
                        <div className={`projects-top-left blend-mode ${viewMode === 'list' ? ' active' : ''}`}>
                            <div className='projects-top-left-flx'>
                                <span
                                    className={viewMode === 'grid' ? 'active' : ''}
                                    onClick={() => setViewMode('grid')}
                                >
                                    grid
                                </span>
                                <span>/</span>
                                <span
                                    className={viewMode === 'list' ? 'active' : ''}
                                    onClick={() => setViewMode('list')}
                                >
                                    list
                                </span>
                            </div>
                        </div>
                        <div className='projects-top-right-main'>
                            {viewMode === 'grid' && (
                                <div className='projects-top-right blend-mode'>
                                    <h1>all projects</h1>
                                </div>
                            )}
                            <div>
                                {viewMode === 'list' && (
                                    <div className='projects-top-right-list'>
                                        {Projects.map((project, idx) => (
                                            <NavLink to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`} className='projects-top-right-list-box-main' key={idx}>
                                                <div className='projects-top-right-list-box-content'>
                                                    <div className='projects-top-right-list-box-content-number blend-mode'>
                                                        <span className='content-number'>{project.number}</span>
                                                        <div className='projects-view-button'>
                                                            <Commonbutton Buttonclass="butonspacefour no-hover" ButtonLink="none" Buttontext="view" />
                                                        </div>
                                                    </div>
                                                    <div className='projects-top-right-list-box-content-title-line blend-mode'>
                                                        <p>{project.title}</p>
                                                        <span>{project.location}</span>
                                                    </div>
                                                    <div className='projects-top-right-list-box-content-year blend-mode'>
                                                        <span>{project.year}</span>
                                                    </div>
                                                </div>
                                                <div className='projects-top-right-list-box-image'>
                                                    {Array.isArray(project.data) && project.data.length > 0 ? (
                                                        project.data.map((img, i) => (
                                                            <img key={i} src={img} alt={project.title + ' image ' + (i+1)} />
                                                        ))
                                                    ) : (
                                                        <img src={project.image} alt={project.title} />
                                                    )}
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {viewMode === 'grid' && (
                        <div className='projects-bottom-flx'>
                            {Projects.map((project, idx) => (
                                <NavLink
                                    to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
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
                                </NavLink>
                            ))}
                        </div>
                    )}
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
