import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "./studioherobanner.scss"

export default function Studioherobanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = bannerRef.current;
    gsap.fromTo(
      el,
      { y: '0px' },
      {
        y: '48vh',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='studio-herobanner-main'>
      <div className='studio-herobanner' ref={bannerRef}>
        <div className="container-full">
          <div className='studio-herobanner-col-flx-main'>
            <div className='studio-herobanner-col-flx-top'></div>
            <div className='studio-herobanner-col-flx-mid'>
              <div className='studio-cape-town-left'>
                <p>cape town, johannesburg, rsa</p>
              </div>
              <div className='studio-cape-town-left-one'>
                <p>( &nbsp; est. 1998 &nbsp; )</p>
              </div>
              <div className='studio-architect-right-one'>
                <p>dhk</p>
              </div>
              <div className='studio-architect-right'>
                <p>architecture, urban design, interior design</p>
              </div>
            </div>
            <div className='studio-herobanner-col-flx-bottom'>
              <h1>our studio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
