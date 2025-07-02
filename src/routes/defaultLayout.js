import React, { useEffect } from 'react'
import { Outlet, useLocation, matchPath } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import LenisScroll from '../components/scroll/lenisscroll'
import Cursor from '../components/cursor/cursor'
import Loader from '../components/loader'
import Grdscrollingsection from '../components/grdscrollingsection'

export default function DefaultLayout() {
    const location = useLocation();
    useEffect(() => {
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);
    return (
        <>
            <Loader />
            <LenisScroll />
            <Cursor />
            {location.pathname === '/' && <Grdscrollingsection />}
            <Header />
            <Outlet />
            {!(matchPath('/projects/:title', location.pathname)) && <Footer />}
        </>
    )
}