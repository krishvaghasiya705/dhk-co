import React, { useState } from 'react'
import "./allarticle.scss"
import Journaldata from '../journaldata/journaldata'
import { Link } from 'react-router-dom'
import Commonbutton from './../../commonbutton/index';

export default function Allarticle() {
    const [visibleArticles, setVisibleArticles] = useState(6);

    const handleLoadMore = () => {
        setVisibleArticles(prev => prev + 6);
    };

    const displayedArticles = Journaldata.slice(0, visibleArticles);
    const hasMoreArticles = visibleArticles < Journaldata.length;

    return (
        <>
            <div className='all-article-title-main'>
                <div className="container-full">
                    <div className='all-article-title'>
                        <h1 className='blend-mode'>all articles</h1>
                    </div>
                </div>
            </div>
            <div className='article-main'>
                <div className="container-full">
                    {displayedArticles.map((i, index) => (
                        <Link to={`/journal/${encodeURIComponent(i.Title)}`} className='article' key={index}>
                            <div className='article-tag-button blend-mode'>
                                <button type='button' className='tag-button'>{i.Tag}</button>
                            </div>
                            <div className='article-content-main blend-mode'>
                                <h2>{i.Title}</h2>
                                <p>{i.MainPara}</p>
                            </div>
                            <div className='article-image'>
                                <img src={i.BannerImage} alt={i.BannerImage} />
                                <div className='article-layer'></div>
                                <div className='article-read-button'>
                                    <Commonbutton ButtonLink="none" ButtonHover="none" Buttontext="read article" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {hasMoreArticles && (
                <div className='article-load-more'>
                    <Commonbutton 
                        ButtonLink="none" 
                        Buttontext="load more" 
                        Buttonclass="butonspacefourty"
                        onClick={handleLoadMore}
                    />
                </div>
            )}
        </>
    )
}
