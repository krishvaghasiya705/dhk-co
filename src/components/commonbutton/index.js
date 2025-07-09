import React from 'react'
import "./commonbutton.scss"
import { NavLink } from 'react-router-dom';

export default function Commonbutton({ ButtonLink, Buttontext, Buttonclass, Buttonicon, ButtonHover, onClick, LinkTarget }) {
    const isLink = ButtonLink && ButtonLink !== 'none';
    const buttonContent = (
        <button type='button' className={`${Buttonclass} common-button-main blend-mode ${ButtonHover === 'none' ? 'no-hover' : ''}`} onClick={onClick}>
            <span>{"["}</span>
            {Buttontext && <span className='button-text'>{Buttontext}</span>}
            {Buttonicon}
            <span>{"]"}</span>
        </button>
    );
    return (
        <>
            {isLink ? (
                <NavLink to={ButtonLink} className="common-button-link" target={LinkTarget}>
                    {buttonContent}
                </NavLink>
            ) : (
                buttonContent
            )}
        </>
    )
}
