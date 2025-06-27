import React from 'react'
import "./home.scss"
import HomeHerosection from '../../components/homecomponents/herosection'
import Ourstorysection from '../../components/homecomponents/ourstorysection'
import Featuredprojects from '../../components/homecomponents/feturedprojects'
import Journalsection from '../../components/homecomponents/journalsection'
import Awardssection from '../../components/homecomponents/awardssection'

export default function Home() {
  return (
    <>
      <HomeHerosection />
      <Ourstorysection />
      <Featuredprojects />
      <Awardssection />
      <Journalsection />
    </>
  )
}
