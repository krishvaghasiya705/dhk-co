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
            <svg width="424" height="1275" viewBox="0 0 424 1275" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef} d="M37.9998 6.00052C200.067 -10.7486 414.5 58.5 414.5 109.501C414.5 160.501 86.9997 212.501 37.9998 198.501C-11.0001 184.5 -7.50025 134.501 37.9998 118.501C83.4999 102.5 425.5 250.001 414.5 289C403.5 328 183 409.5 158.5 369C134 328.501 169 296 228 296C287 296 315.5 319.501 310.5 369C305.5 418.5 44.4997 417.501 37.9998 479C31.4999 540.5 414.5 492.001 414.5 613.501C414.5 735 -4.50027 775.501 37.9998 858.001C80.4999 940.5 382.5 1091 414.5 1006C446.5 921 360.5 870.001 283.5 876.501C206.5 883 29.9996 1003 37.9998 1096.5C46 1190 257.5 1075 414.5 1272.5" stroke="black" stroke-width="10" />
            </svg>
        </div>
    );
}
