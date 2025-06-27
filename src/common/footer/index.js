import React, { useState } from 'react'
import "./footer.scss"
import { NavLink } from 'react-router-dom'
import Commonbutton from '../../components/commonbutton'

export default function Footer() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <footer>
        <div className="container-full">
          <div className='footer-spacing'>
            <div className='footer-left blend-mode'>
              <span>all rights reserved. dhk@2025</span>
              <NavLink to={"/"}>privacy policy</NavLink>
            </div>
            <div className='footer-right'>
              <div className='footer-content'>
                <div className='footer-links blend-mode'>
                  <NavLink to={"/"}>
                    <span className='link-active-box'></span>
                    <span className='link-text'>home</span>
                  </NavLink>
                  <NavLink to={"/projects"}>
                    <span className='link-active-box'></span>
                    <span className='link-text'>projects</span>
                  </NavLink>
                  <NavLink to={"/studio"}>
                    <span className='link-active-box'></span>
                    <span className='link-text'>studio</span>
                  </NavLink>
                  <NavLink to={"/journal"}>
                    <span className='link-active-box'></span>
                    <span className='link-text'>journal</span>
                  </NavLink>
                </div>
                <div className='footer-social-link blend-mode'>
                  <a href='https://www.instagram.com/dhkarchitects/' target='__blank'>instagram</a>
                  <a href='https://www.linkedin.com/company/dhk-architects/' target='__blank'>linkedIn</a>
                  <a href='https://www.facebook.com/dhkarchitecture'>facebook</a>
                  <a href='https://za.pinterest.com/dhkarchitects/' target='__blank'>pinterest</a>
                  <a href='https://vimeo.com/dhkarchitects' target='__blank'>vimeo</a>
                </div>
                <form className='newsletter-form blend-mode'>
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
                  <button type='button' className='common-button-sc-main'>{`[ submit ]`}</button>
                </form>
              </div>
              <div className='footer-contact-button'>
                <Commonbutton ButtonLink="/" Buttonclass="butonspacefourty" Buttontext="contact us" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
