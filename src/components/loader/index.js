import React, { useEffect, useState } from 'react'
import "./loader.scss"
import loaderimage1 from "../../assets/images/loaderimage1.webp"
import loaderimage2 from "../../assets/images/loaderimage2.webp"
import loaderimage3 from "../../assets/images/loaderimage3.webp"
import loaderimage4 from "../../assets/images/loaderimage4.webp"
import loaderimage5 from "../../assets/images/loaderimage5.webp"
import loaderimage6 from "../../assets/images/loaderimage6.webp"
import loaderimage7 from "../../assets/images/loaderimage7.webp"
import loaderimage8 from "../../assets/images/loaderimage8.webp"

const images = [
    loaderimage1,
    loaderimage2,
    loaderimage3,
    loaderimage4,
    loaderimage5,
    loaderimage6,
    loaderimage7,
    loaderimage8,
];

export default function Loader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hide, setHide] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!show) return;
        let interval;
        if (currentIndex < images.length - 1) {
            interval = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev < images.length - 1) {
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 200);
        } else if (currentIndex === images.length - 1) {
            const hideTimer = setTimeout(() => {
                setHide(true);
            }, 700);
            return () => clearTimeout(hideTimer);
        }
        return () => interval && clearInterval(interval);
    }, [currentIndex, show]);

    useEffect(() => {
        if (hide) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [hide]);

    if (!show) return null;

    return (
        <div className={`loader-main${hide ? ' hide' : ''}`}>
            <div className='loader'>
                <img src={images[currentIndex]} alt="loader-images" />
                <div className='loader-content'>
                    <span>{Math.round(((currentIndex + 1) / images.length) * 100)}</span>
                    <h1>welcome to dhk</h1>
                </div>
            </div>
        </div>
    );
}
