import React, { useRef, useEffect } from 'react'
import "./projectinfodropdown.scss"
import Arrrowrightop from '../../assets/icons/arrrowrightop'
import useScrollLock from '../../components/scrolllock';

export default function Projectinfodropdown({ data, open }) {
    useScrollLock();
    const modalRef = useRef();
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;
        function stopPropagation(e) {
            const atTop = modal.scrollTop === 0;
            const atBottom = modal.scrollTop + modal.clientHeight >= modal.scrollHeight;
            if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
                e.stopPropagation();
            }
        }
        modal.addEventListener('wheel', stopPropagation, { passive: false });
        return () => {
            modal.removeEventListener('wheel', stopPropagation);
        };
    }, []);
    if (!data) return null;



    return (
        <div className={`project-info-dropdown-main${open ? ' open' : ''}`}>
            <div className="container-full">
                <div className='project-info-dropdown-flx'>
                    <div className='project-info-dropdown-flx-left'>
                        <div>
                            <h1>{data.Pagetitle}</h1>
                            <h2>{data.pagelocation}</h2>
                        </div>
                    </div>
                    <div className='project-info-dropdown-flx-mid-main'>
                        <div className="project-info-dropdown-flx-mid" ref={modalRef}>
                            <div className='project-info-dropdown-paragraph'>
                                {data.paragraphs && data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                            <div className='projects-blank-line'>
                                <span></span>
                            </div>
                            {(data.method || data.method2 || data.method3) && (
                                <div className='project-info-dropdown-methods'>
                                    {data.method && <span>{data.method}</span>}
                                    {data.method2 && <span>{data.method2}</span>}
                                    {data.method3 && <span>{data.method3}</span>}
                                </div>
                            )}
                            <div className='project-info-dropdown-hr-line'></div>
                        </div>
                    </div>
                    <div className='project-info-dropdown-flx-right'>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>client</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                <p>{data.client}</p>
                            </div>
                        </div>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>status</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                <p>{data.status}</p>
                            </div>
                        </div>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>year</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                <p>{data.year}</p>
                            </div>
                        </div>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>services</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                {data.services && data.services.map((s, i) => <p key={i}>{s}{i < data.services.length - 1 ? ',' : ''}</p>)}
                            </div>
                        </div>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>tags</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                {data.tags && data.tags.map((t, i) => <p key={i}>{t}{i < data.tags.length - 1 ? ',' : ''}</p>)}
                            </div>
                        </div>
                        <div className='project-right-info-flx'>
                            <div className='project-right-info-flx-left'>
                                <p>location</p>
                            </div>
                            <div className='project-right-info-flx-right'>
                                <a href={data.location} target="_blank" rel="noopener noreferrer">view on google maps <Arrrowrightop /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
