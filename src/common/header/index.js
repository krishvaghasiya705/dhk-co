import React, { useEffect, useState } from 'react'
import Grdscrollingsection from '../../components/grdscrollingsection'
import "./header.scss"
import { NavLink, useLocation } from 'react-router-dom'
import Sidebar from '../sidebar';
import dhklogo from "../../assets/images/dhk-logo.webp"

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY >= 1300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      {location.pathname === '/' && <Grdscrollingsection />}
      <header className='blend-mode'>
        <div className='container-full'>
          <div className='header-flx'>
            <div className={`header-logo${scrolled ? ' logo-hover-enabled' : ''}`}>
              <NavLink to={"/"} className='header-logo-flx'>
                <span className='header-home-text'>home</span>
                <span className='logo-box'></span>
              </NavLink>
              <div className='header-logo-img'>
                <NavLink to={"/"}>
                  <img src={dhklogo} alt="dhklogo" />
                </NavLink>
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
