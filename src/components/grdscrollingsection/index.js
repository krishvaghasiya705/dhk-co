import React, { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./grdscrollingsection.scss"
import Dhklogo from "../../assets/images/dhk-logo.webp"
import grdimage1 from "../../assets/images/grdimage1.webp"
import grdimage2 from "../../assets/images/grdimage2.webp"
import grdimage3 from "../../assets/images/grdimage3.webp"
import grdimage4 from "../../assets/images/grdimage4.webp"
import grdimage5 from "../../assets/images/grdimage5.webp"
import ImageSkeletonLoader from '../common/ImageSkeletonLoader'
const imagePairs = [
  { image1: Dhklogo, alt1: "Dhklogo", image2: grdimage3, alt2: "grdimage3" },
  { image1: grdimage1, alt1: "grdimage1", image2: grdimage4, alt2: "grdimage4" },
  { image1: grdimage2, alt1: "grdimage2", image2: grdimage5, alt2: "grdimage5" },
]

gsap.registerPlugin(ScrollTrigger)

export default function Grdscrollingsection() {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);
  const image1Refs = useRef([]);

  const [loaded, setLoaded] = useState(Array(imagePairs.length * 2).fill(false));

  const handleImageLoad = idx => {
    setLoaded(prev => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let pinTrigger = null;
    let animTriggers = [];

    pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${section.offsetHeight}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
    });

    animTriggers = boxRefs.current.map((box, i) => {
      if (!image1Refs.current[i]) return null;
      return gsap.fromTo(
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
          },
        }
      ).scrollTrigger;
    }).filter(Boolean);

    return () => {
      if (pinTrigger) pinTrigger.kill();
      animTriggers.forEach(trigger => trigger && trigger.kill());
      boxRefs.current = [];
      image1Refs.current = [];
    };
  }, []);

  return (
    <>
      <div className='grd-scrolling-section-main' ref={sectionRef}>
        <div className="container-full">
          <div className='grd-scrolling-section'>
            {imagePairs.map((pair, i) => (
              <div className='grid-scroll-box-main' ref={el => boxRefs.current[i] = el} key={i}>
                <div className='grid-scroll-box-image1' ref={el => image1Refs.current[i] = el}>
                  {!loaded[i * 2] && (
                    <ImageSkeletonLoader />
                  )}
                  <img
                    src={pair.image1}
                    alt={pair.alt1}
                    onLoad={() => handleImageLoad(i * 2)}
                  />
                </div>
                <div className='grid-scroll-box-image2'>
                  {!loaded[i * 2 + 1] && (
                    <ImageSkeletonLoader />
                  )}
                  <img
                    src={pair.image2}
                    alt={pair.alt2}
                    onLoad={() => handleImageLoad(i * 2 + 1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
