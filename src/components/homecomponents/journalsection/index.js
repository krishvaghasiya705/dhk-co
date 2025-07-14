import React, { useState } from 'react'
import "./journalsection.scss"
import Commonbutton from '../../commonbutton';
import { NavLink } from 'react-router-dom';
import Cursorbutton from '../../cursorbutton';
import Journaldata from '../../journalcomponents/journaldata/journaldata';

export default function Journalsection() {
    const [cursorBtn, setCursorBtn] = useState({ visible: false, x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursorBtn({ visible: true, x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setCursorBtn((prev) => ({ ...prev, visible: false }));
    };

    const displayArticles = Journaldata.slice(0, 5);

    return (
        <>
            <div className='journal-section-main'>
                <div className="container-full">
                    <div className='journal-section'>
                        <div className='journal-section-title blend-mode'>
                            <h4>journal</h4>
                        </div>
                        <div className='featured-projects-grd'>
                            {displayArticles.map((item, index) => {
                                const boxClass = index === 0 ? '' : 'featured-box-main';
                                return (
                                    <div className={boxClass} key={index}>
                                        <NavLink
                                            to={`/journal/${encodeURIComponent(item.Title)}`}
                                            className='featured-box'
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className='featured-box-img'>
                                                <img src={item.BannerImage} alt={item.Title} />
                                            </div>
                                            <div className='featured-box-content'>
                                                <button type='button' className='featured-box-content-button'>{item.Tag}</button>
                                                <div className='featured-box-content-right'>
                                                    <p className='featured-box-content-title'>{item.Title}</p>
                                                    <p className='featured-box-content-description'>{item.MainPara}</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            })}
                            <div className='featured-box-main'>
                                <div className='view-projects-box-main blend-mode'>
                                    <Commonbutton ButtonLink="/journal" Buttontext="view more" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cursorbutton visible={cursorBtn.visible} x={cursorBtn.x} y={cursorBtn.y} />
        </>
    )
}
