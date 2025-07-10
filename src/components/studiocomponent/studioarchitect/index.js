import React from 'react'
import "./studioarchitect.scss"
import Dhkanimate from '../../../assets/icons/dhkanimate'

export default function Studioarchitect() {
    return (
        <>
            <div className='studio-architect-main'>
                <div className="container-full">
                    <div className='studio-architect'>
                        <div className='studio-architect-left'>
                            <Dhkanimate />
                        </div>
                        <div className='studio-architect-right blend-mode'>
                            <h2>We're architects, urban designers and interior designers. We deliver buildings, public spaces and interiors that are contextually sensitive, environmentally responsible and technically resilient.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
