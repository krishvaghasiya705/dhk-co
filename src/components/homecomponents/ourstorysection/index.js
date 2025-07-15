import React, { useState } from 'react'
import "./ourstorysection.scss"
import ourstoryimage1 from "../../../assets/images/ourstoryimage1.webp"
import ourstoryimage2 from "../../../assets/images/ourstoryimage2.webp"
import Commonbutton from '../../commonbutton'
import Skeletonloader from '../../skeletonloader/skeletonloader'

export default function Ourstorysection() {
    const [img1Loaded, setImg1Loaded] = useState(false);
    const [img2Loaded, setImg2Loaded] = useState(false);
    return (
        <>
            <div className='our-story-section'>
                <div className="container-full">
                    <div className="our-story-flx-col">
                        <div className='ourstoryimage1'>
                            {!img1Loaded && <Skeletonloader />}
                            <img
                                src={ourstoryimage1}
                                alt="ourstoryimage1"
                                onLoad={() => setImg1Loaded(true)}
                            />
                        </div>
                        <div className='our-story-flx'>
                            <div className='ourstoryimage2'>
                                {!img2Loaded && <Skeletonloader />}
                                <img
                                    src={ourstoryimage2}
                                    alt="ourstoryimage2"
                                    onLoad={() => setImg2Loaded(true)}
                                />
                            </div>
                            <div className='our-story-flx-content-right blend-mode'>
                                <div className='our-story-flx-content-right-flx'>
                                    <Commonbutton ButtonLink="/" Buttontext="our story" />
                                    <div className='our-story-flx-content'>
                                        <p>dhk Architects was established in 1998 in a merger between Derick Henstra Architects and KCvR Architects. Today, we're one of the largest and leading architectural studios in Africa. Since then, we’ve delivered award-winning buildings, urban designs and interior spaces in South Africa, across the continent and beyond. We have studios in Cape Town and Johannesburg and deliver for clients all over the world.</p>
                                        <p>Our team of over 100 people comprises multidisciplinary design professionals and technologists, supported by experienced and talented BIM experts, architectural visualisers, graphic designers, communication specialists, administrators, HR and finance specialists. We also work collaboratively with experts in other disciplines at all stages of our projects, from design concept to practical completion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
