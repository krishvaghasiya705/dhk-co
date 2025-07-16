import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./errorpage.scss";
import Commonbutton from "../../components/commonbutton";
import Filenotfound from "../../assets/icons/filenotfound";
import LenisScroll from "../../components/scroll/lenisscroll";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ErrorPage = () => {
    const triggerRef = useRef(null);
    const pathRef = useRef(null);
    const progressRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const path = pathRef.current;
        const triggerElem = triggerRef?.current;
        const pathLength = path.getTotalLength();
        const progressElem = progressRef.current;
        let redirected = false;

        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        const tween = gsap.to(path, {
            strokeDashoffset: 0,
            strokeDasharray: pathLength,
            ease: 'none',
            scrollTrigger: {
                trigger: triggerElem || path,
                start: 'top 0',
                end: 'bottom bottom',
                scrub: true,
                // markers: true,
                onUpdate: (self) => {
                    if (progressElem) {
                        const progress = self.progress;
                        gsap.to(progressElem, { width: `${progress * 100}%`, duration: 0.1, overwrite: 'auto' });
                        if (progress === 1 && !redirected) {
                            redirected = true;
                            navigate("/");
                        }
                    }
                },
            },
        });

        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, [navigate]);
    return (
        <>
            <LenisScroll />
            <div className="error-page-layout-main">
                <div className="error-animation-svg-main blend-mode" ref={triggerRef}>
                    <div className="error-animation-svg">
                        <svg width="358" height="116" viewBox="0 0 358 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path ref={pathRef} d="M1 110C104.703 107.408 230.5 84.4995 229.5 39.4996C228.5 -5.50034 146 -6.00001 146 39.4996C146 84.9992 245.879 114.576 357 110" stroke="black" stroke-width="10" />
                        </svg>
                    </div>
                </div>
                <div className="error-page-layout blend-mode">
                    <div className="error-page-layout-content">
                        <Filenotfound />
                        <h1>Page Not Found</h1>
                        <p>The page you are looking for doesn't exist or has been moved</p>
                        <Commonbutton Buttontext="Fall Back" ButtonLink={"/"} />

                        <div className="redirection-button-main blend-mode">
                            <button type="button" className="redirection-button"><div className="redirection-status" ref={progressRef}></div><span>auto redirect</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage; 