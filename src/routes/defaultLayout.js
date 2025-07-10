import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, matchPath } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import LenisScroll from '../components/scroll/lenisscroll'
import Cursor from '../components/cursor/cursor'
import Loader from '../components/loader'
import Grdscrollingsection from '../components/grdscrollingsection'

export default function DefaultLayout() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Lock scroll when sidebar or dropdown is open
    useEffect(() => {
        if (sidebarOpen || dropdownOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [sidebarOpen, dropdownOpen]);

    useEffect(() => {
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/journal" || location.pathname.startsWith("/journal/")) {
            document.body.style.backgroundColor = "#fff";
        } else {
            document.body.style.backgroundColor = "#000";
        }
    }, [location.pathname]);
    return (
        <>
            <Loader />
            {!(sidebarOpen || dropdownOpen) && <LenisScroll />}
            <Cursor />
            {location.pathname === '/' && <Grdscrollingsection />}
            <Header 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                dropdownOpen={dropdownOpen} 
                setDropdownOpen={setDropdownOpen} 
            />
            <Outlet />
            {!(matchPath('/projects/:title', location.pathname)) && <Footer />}
        </>
    )
}