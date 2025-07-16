import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './svganimate.scss';

gsap.registerPlugin(ScrollTrigger);

export default function SvgAnimate({ triggerRef }) {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const triggerElem = triggerRef?.current;
        const pathLength = path.getTotalLength();

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
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
                // markers: true,
            },
        });

        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, [triggerRef]);

    return (
        <div className="svg-animate-main">
            <svg width="430" height="1278" viewBox="0 0 430 1278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef} d="M40.9998 8.00052C203.067 -8.74855 417.5 60.5 417.5 111.501C417.5 162.501 89.9997 214.501 40.9998 200.501C-8.00011 186.5 -4.50025 136.501 40.9998 120.501C86.4999 104.5 428.5 252.001 417.5 291C406.5 330 186 411.5 161.5 371C137 330.501 172 298 231 298C290 298 318.5 321.501 313.5 371C308.5 420.5 47.4997 419.501 40.9998 481C34.4999 542.5 417.5 494.001 417.5 615.501C417.5 737 -1.50027 777.501 40.9998 860.001C83.4999 942.5 385.5 1093 417.5 1008C449.5 923 363.5 872.001 286.5 878.501C209.5 885 32.9996 1005 40.9998 1098.5C49 1192 260.5 1077 417.5 1274.5" stroke="white" stroke-width="10" />
            </svg>
        </div>
    );
}
