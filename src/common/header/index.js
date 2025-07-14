import React, { useEffect, useState } from 'react'
import "./header.scss"
import { NavLink, useLocation } from 'react-router-dom'
import Sidebar from '../sidebar';
import dhklogo from "../../assets/images/dhk-logo.webp"
import Commonbutton from '../../components/commonbutton';
import Dropdownicon from '../../assets/icons/dropdownicon';
import { useTheme } from '../../contexts/ThemeContext';
import { useProjectFilter } from '../../contexts/ProjectFilterContext';
import Projectinfodropdown from '../projectinfodropdown';
import projects from '../../components/projectscomponents/projectsdata/data';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [projectInfoOpen, setProjectInfoOpen] = useState(false);
  const { filter: selectedItem, setFilter: setSelectedItem } = useProjectFilter();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setScrolled(window.scrollY >= 1200);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  const logoHoverEnabled = location.pathname === "/" ? scrolled : true;

  const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  let projectData = null;
  let projectTitle = '';
  let projectLocation = '';
  if (isProjectDetail) {
    const urlTitle = location.pathname.split('/')[2];
    projectData = projects.find(
      p => p.title.replace(/\s+/g, '-').toLowerCase() === urlTitle?.toLowerCase()
    );
    if (projectData && projectData.pagedata && projectData.pagedata[0]) {
      projectTitle = projectData.pagedata[0].Pagetitle;
      projectLocation = projectData.pagedata[0].pagelocation;
    }
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = (itemText, displayText) => {
    if (displayText === 'all projects') {
      setSelectedItem('all projects');
    } else {
      setSelectedItem(itemText);
    }
    setDropdownOpen(false);
  };

  const dropdownItems = [
    'urban design',
    'sustainable',
    'retail',
    'residential',
    'public + education',
    'office',
    'mixed-use',
    'hospitality'
  ];

  return (
    <>
      <header className='blend-mode'>
        <div className='container-full'>
          <div className='header-flx'>
            <div className={`header-logo${logoHoverEnabled ? ' logo-hover-enabled' : ''}`}>
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
            {isProjectDetail && (
              <div className='projects-title'>
                <p>{projectTitle}</p>
                <span>{projectLocation}</span>
              </div>
            )}
            <div className='header-links-main'>
              <div>
                {location.pathname === '/projects' &&
                  <div className='header-dropdown-main'>
                    <div className={`header-dropdown${dropdownOpen ? ' active' : ''}`} onClick={toggleDropdown}>
                      <Commonbutton ButtonLink="none" Buttonclass="butonspacefour" ButtonHover="none" Buttonicon={<Dropdownicon />} />
                      <p className='blend-mode'>{selectedItem}</p>
                    </div>
                    {dropdownOpen && (
                      <div className='header-dropdown-body blend-mode'>
                        {dropdownItems.map((item, index) => {
                          const displayText = item === selectedItem ? 'all projects' : item;
                          return (
                            <p
                              key={index}
                              onClick={() => handleDropdownItemClick(item, displayText)}
                              className={item === selectedItem ? 'selected' : ''}
                            >
                              {displayText}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                }
              </div>
              {!isProjectDetail && (
                <div className='header-links-flx'>
                  <NavLink to={"/projects"}>projects, <span></span></NavLink>
                  <NavLink to={"/studio"}>studio, <span></span></NavLink>
                  <NavLink to={"/journal"}>journal <span></span></NavLink>
                </div>
              )}
            </div>
            {isProjectDetail && (
              <div className='projects-info-and-close-main'>
                <Commonbutton ButtonLink="none" Buttonclass="buttontextsixty" Buttontext="project info" onClick={() => setProjectInfoOpen(v => !v)} />
                <Commonbutton ButtonLink="/projects" Buttontext="close" />
              </div>
            )}
            <div className='header-right-content'>
              <div className='header-theme-button-flx'>
                {location.pathname === '/' && <>
                  <span className={theme === "dark" ? 'active' : ''} onClick={() => toggleTheme('dark')}>dark</span>
                  <span className={theme === "light" ? 'active' : ''}>/</span>
                  <span className={theme === "light" ? 'active' : ''} onClick={() => toggleTheme('light')}>light</span>
                </>}
              </div>
              <div className='menu-icon' onClick={() => {
                setSidebarOpen(true);
                setProjectInfoOpen(false);
              }}>
                <span>menu</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {sidebarOpen && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      {isProjectDetail && projectData && projectInfoOpen && (
        <Projectinfodropdown open={projectInfoOpen} data={projectData.pagedata[0]} />
      )}
    </>
  )
}
