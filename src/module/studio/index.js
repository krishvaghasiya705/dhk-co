import React from 'react'
import Studioherobanner from '../../components/studiocomponent/studioherobanner'
import Studioarchitect from '../../components/studiocomponent/studioarchitect'
import Designdna from '../../components/studiocomponent/designdna'
import Whatwedo from '../../components/studiocomponent/whatwedo'
import Leadershipteam from '../../components/studiocomponent/leadershipteam'
import Awardssection from '../../components/homecomponents/awardssection'
import Journalsection from '../../components/homecomponents/journalsection'
import Meettheteam from '../../components/studiocomponent/meettheteam'
import Whywork from '../../components/studiocomponent/whywork'

export default function Studio() {
  return (
    <>
      <Studioherobanner />
      <Studioarchitect />
      <Designdna />
      <Whatwedo />
      <Leadershipteam />
      <Meettheteam />
      <Awardssection />
      <Whywork />
      <Journalsection />
    </>
  )
}
