import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./grdscrollingsection.scss"
import Dhklogo from "../../assets/images/dhk-logo.webp"
import grdimage1 from "../../assets/images/grdimage1.webp"
import grdimage2 from "../../assets/images/grdimage2.webp"
import grdimage3 from "../../assets/images/grdimage3.webp"
import grdimage4 from "../../assets/images/grdimage4.webp"
import grdimage5 from "../../assets/images/grdimage5.webp"

gsap.registerPlugin(ScrollTrigger)

export default function Grdscrollingsection() {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);
  const image1Refs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${section.offsetHeight}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
    });

    boxRefs.current.forEach((box, i) => {
      if (!image1Refs.current[i]) return;
      gsap.fromTo(
        image1Refs.current[i],
        { height: '100%' },
        {
          height: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: box,
            start: `top+=${100 + i * 100} top`,
            end: `bottom top`,
            scrub: true,
            containerAnimation: ScrollTrigger.getById('sectionPin'),
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='grd-scrolling-section-main' ref={sectionRef}>
      <div className="container-full">
        <div className='grd-scrolling-section'>
            <div className='grid-scroll-box-main' ref={el => boxRefs.current[0] = el}>
                <div className='grid-scroll-box-image1' ref={el => image1Refs.current[0] = el}>
                    <img src={Dhklogo} alt="Dhklogo" />
                </div>
                <div className='grid-scroll-box-image2'>
                    <img src={grdimage3} alt="grdimage3" />
                </div>
            </div>
            <div className='grid-scroll-box-main' ref={el => boxRefs.current[1] = el}>
                <div className='grid-scroll-box-image1' ref={el => image1Refs.current[1] = el}>
                    <img src={grdimage1} alt="grdimage1" />
                </div>
                <div className='grid-scroll-box-image2'>
                    <img src={grdimage4} alt="grdimage4" />
                </div>
            </div>
            <div className='grid-scroll-box-main' ref={el => boxRefs.current[2] = el}>
                <div className='grid-scroll-box-image1' ref={el => image1Refs.current[2] = el}>
                    <img src={grdimage2} alt="grdimage2" />
                </div>
                <div className='grid-scroll-box-image2'>
                    <img src={grdimage5} alt="grdimage5" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
