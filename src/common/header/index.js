import React, { useEffect, useState } from 'react'
import Grdscrollingsection from '../../components/grdscrollingsection'
import "./header.scss"
import { NavLink } from 'react-router-dom'
import Sidebar from '../sidebar';

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Grdscrollingsection />
      <header className='blend-mode'>
        <div className='container-full'>
          <div className='header-flx'>
            <div className='header-logo'>
              <div className='header-logo-flx'>
                <span className='header-home-text'>home</span>
                <span className='logo-box'></span>
              </div>
            </div>
            <div className='header-links-main'>
              <NavLink to={"/"}>projects,</NavLink>
              <NavLink to={"/"}>studio,</NavLink>
              <NavLink to={"/"}>journal</NavLink>
            </div>
            <div className='header-right-content'>
              <div className='header-theme-button-flx'>
                <span className={theme === "dark" ? 'active' : ''} onClick={() => setTheme('dark')}>dark</span>
                <span className={theme === "light" ? 'active' : ''}>/</span>
                <span className={theme === "light" ? 'active' : ''} onClick={() => setTheme('light')}>light</span>
              </div>
              <div className='menu-icon' onClick={() => setSidebarOpen(true)}>
                <span>menu</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
    </>
  )
}
