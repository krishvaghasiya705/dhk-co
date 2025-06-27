import React from 'react'
import "./commonbutton.scss"
import { NavLink } from 'react-router-dom';

export default function Commonbutton({ ButtonLink, Buttontext, Buttonclass }) {
    const isLink = ButtonLink && ButtonLink !== 'none';
    const buttonContent = (
        <button type='button' className={`${Buttonclass} common-button-main blend-mode`}>
            <span>{"["}</span>
            <span className='button-text'>{Buttontext}</span>
            <span>{"]"}</span>
        </button>
    );
    return (
        <>
            {isLink ? (
                <NavLink to={ButtonLink} className="common-button-link">
                    {buttonContent}
                </NavLink>
            ) : (
                buttonContent
            )}
        </>
    )
}
