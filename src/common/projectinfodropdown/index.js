import React from 'react'
import "./projectinfodropdown.scss"
import Arrrowrightop from '../../assets/icons/arrrowrightop'

export default function Projectinfodropdown({ data, open }) {
    if (!data) return null;
    return (
        <div className={`project-info-dropdown-main${open ? ' open' : ''}`}>
            <div className="container">
                <div className='project-info-dropdown-flx'>
                    <div className='project-info-dropdown-flx-left'>
                        <div>
                            <h1>{data.Pagetitle}</h1>
                            <h2>{data.pagelocation}</h2>
                        </div>
                    </div>
                    <div className='project-info-dropdown-flx-mid-main'>
                        <div className="project-info-dropdown-flx-mid">
                            <div className='project-info-dropdown-paragraph'>
                                {data.paragraphs && data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                            <div className='projects-blank-line'>
                                <span></span>
                            </div>
                            {data.method && (
                                <div className='project-info-dropdown-methods'>
                                    <span>{data.method}</span>
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
