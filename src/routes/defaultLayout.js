import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import LenisScroll from '../components/scroll/lenisscroll'
import Cursor from '../components/cursor/cursor'
import Loader from '../components/loader'

export default function DefaultLayout() {
    return (
        <>
            <Loader />
            <LenisScroll />
            <Cursor />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}