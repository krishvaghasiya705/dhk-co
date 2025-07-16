import React, { useRef } from 'react'
import HomeHerosection from '../../components/homecomponents/herosection'
import Ourstorysection from '../../components/homecomponents/ourstorysection'
import Featuredprojects from '../../components/homecomponents/feturedprojects'
import Journalsection from '../../components/homecomponents/journalsection'
import Awardssection from '../../components/homecomponents/awardssection'
import SvgAnimate from '../../components/homecomponents/svganimate'

const RelativeBox = ({ children }) => (
  <div className='relative'>
    {children}
  </div>
);

export default function Home() {
  const svgSectionRef = useRef(null);
  return (
    <>
      <RelativeBox>
        <SvgAnimate triggerRef={svgSectionRef} />
        <HomeHerosection />
        <Ourstorysection />
        <Featuredprojects />
        <Awardssection />
      </RelativeBox>
      <Journalsection />
    </>
  )
}
