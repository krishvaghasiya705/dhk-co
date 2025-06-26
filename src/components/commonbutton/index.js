import React from 'react'
import "./commonbutton.scss"
import { NavLink } from 'react-router-dom';

export default function Commonbutton({ ButtonLink, Buttontext }) {
    return (
        <>
            <NavLink to={ButtonLink}>
                <button type='button' className='common-button-main blend-mode'>
                    <span>{"["}</span>
                    <span className='button-text'>{Buttontext}</span>
                    <span>{"]"}</span>
                </button>
            </NavLink>
        </>
    )
}
