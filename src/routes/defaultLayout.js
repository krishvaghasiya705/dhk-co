import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import LenisScroll from '../components/scroll/lenisscroll'
import Cursor from '../components/cursor/cursor'

export default function DefaultLayout() {
    return (
        <>
            <LenisScroll />
            <Cursor />
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}