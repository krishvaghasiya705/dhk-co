import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import LenisScroll from '../components/scroll/lenisscroll'
import Cursor from '../components/cursor/cursor'
import Loader from '../components/loader'
import Grdscrollingsection from '../components/grdscrollingsection'

export default function DefaultLayout() {
    const location = useLocation();
    return (
        <>
            {/* <Loader /> */}
            <LenisScroll />
            <Cursor />
            {location.pathname === '/' && <Grdscrollingsection />}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}