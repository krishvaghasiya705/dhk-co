import React, { useState, useEffect, useRef } from 'react'
import "./sidebar.scss"
import { NavLink } from 'react-router-dom'
import siderbarrightimage from "../../assets/images/siderbarrightimage.webp"
import siderbarleftvid1 from "../../assets/video/siderbarleftvid1.mp4"
import siderbarleftvid2 from "../../assets/video/siderbarleftvid2.mp4"
import siderbarleftvid3 from "../../assets/video/siderbarleftvid3.mp4"
import siderbarleftvid4 from "../../assets/video/siderbarleftvid4.mp4"
import Commonbutton from '../../components/commonbutton'
import gsap from 'gsap'

export default function Sidebar({ isOpen, onClose }) {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const tl = gsap.timeline();
            tl.fromTo(
                sidebarRef.current.querySelectorAll('.sidebar-links-main a'),
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' }
            )
            .fromTo(
                sidebarRef.current.querySelector('.sidebar-close-main'),
                { opacity: 0 },
                { opacity: 1, duration: 0.3 },
                '-=0.3'
            )
            .fromTo(
                sidebarRef.current.querySelector('.sidebar-mid-main'),
                { opacity: 0 },
                { opacity: 1, duration: 0.3 },
                '-=0.2'
            )
            .fromTo(
                sidebarRef.current.querySelector('.sidebar-bottom-main'),
                { opacity: 0 },
                { opacity: 1, duration: 0.3 },
                '-=0.2'
            );
        }
    }, [isOpen]);

    return (
        <div className='sidebar-main' ref={sidebarRef}>
            <div className='sidebar-top-main blend-mode'>
                <div className='sidebar-links-main'>
                    <NavLink to={"/"}
                        onMouseEnter={() => setHoveredLink('home')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >home,</NavLink>
                    <NavLink to={"/"}
                        onMouseEnter={() => setHoveredLink('projects')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >projects,</NavLink>
                    <NavLink to={"/"}
                        onMouseEnter={() => setHoveredLink('studio')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >studio,</NavLink>
                    <NavLink to={"/"}
                        onMouseEnter={() => setHoveredLink('journal')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >journal</NavLink>
                </div>
                <div className='sidebar-close-main' onClick={onClose} style={{cursor: 'pointer'}}>
                    <span className='close-text'>close</span>
                    <span className='close-box'></span>
                </div>
            </div>
            <div className='sidebar-mid-main blend-mode'>
                <form className='sidebar-mid-left'>
                    <div className='newsletter-text'>
                        <label>newsletter</label>
                    </div>
                    <div className='input-flx-main'>
                        {fullName && (
                            <div className='input-clear-button' onClick={() => setFullName("")} style={{ cursor: 'pointer' }}><span>{`[ x ]`}</span></div>
                        )}
                        <input type="text" placeholder='full name' value={fullName} onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div className='input-flx-main'>
                        {email && (
                            <div className='input-clear-button' onClick={() => setEmail("")} style={{ cursor: 'pointer' }}><span>{`[ x ]`}</span></div>
                        )}
                        <input type="email" placeholder='email address' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button type='button' className='submit-button'>{`[ submit ]`}</button>
                </form>
                <Commonbutton ButtonLink="/" Buttontext="contact us" />
                <div className='sidebar-mid-right'>
                    <a href='https://www.instagram.com/dhkarchitects/'>instagram</a>
                    <a href='https://www.linkedin.com/company/dhk-architects/'>linkedIn</a>
                    <a href='https://www.facebook.com/dhkarchitecture'>facebook</a>
                    <a href='https://za.pinterest.com/dhkarchitects/'>pinterest</a>
                    <a href='https://vimeo.com/dhkarchitects'>vimeo</a>
                </div>
            </div>
            <div className='sidebar-bottom-main blend-mode'>
                <div className='sidebar-bottom-left'>
                    <div className='sidebar-bottom-viddeo'>
                        {hoveredLink === 'home' && (
                            <video src={siderbarleftvid1} muted loop autoPlay></video>
                        )}
                    </div>
                    <div className='sidebar-bottom-viddeo'>
                        {hoveredLink === 'projects' && (
                            <video src={siderbarleftvid2} muted loop autoPlay></video>
                        )}
                    </div>
                    <div className='sidebar-bottom-viddeo'>
                        {hoveredLink === 'studio' && (
                            <video src={siderbarleftvid3} muted loop autoPlay></video>
                        )}
                    </div>
                    <div className='sidebar-bottom-viddeo'>
                        {hoveredLink === 'journal' && (
                            <video src={siderbarleftvid4} muted loop autoPlay></video>
                        )}
                    </div>
                </div>
                <div className='sidebar-bottom-right'>
                    {!['home', 'projects', 'studio', 'journal'].includes(hoveredLink) && (
                        <img src={siderbarrightimage} alt="siderbarrightimage" />
                    )}
                </div>
            </div>
        </div>
    )
}
