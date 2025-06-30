import React from 'react'
import "./projectscomponent.scss"
import Commonbutton from './../../commonbutton/index';
import Projects from '../projectsdata/data';


export default function Projectscomponent() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

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
                        {Projects.map((project, idx) => (
                            <div
                                className='projects-bottom'
                                key={project.title}
                            >
                                <div className='projects-left-main'>
                                    <div className='projects-left-content'>
                                        <p>{project.title}</p>
                                        <p>{project.location}</p>
                                    </div>
                                    <div className='projects-right-content'>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                                <div className='projects-right'>
                                    <img src={project.image} alt={project.image} />
                                </div>
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
