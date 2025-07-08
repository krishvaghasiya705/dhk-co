import React from 'react'
import Studioherobanner from '../../components/studiocomponent/studioherobanner'
import Studioarchitect from '../../components/studiocomponent/studioarchitect'
import Designdna from '../../components/studiocomponent/designdna'
import Whatwedo from '../../components/studiocomponent/whatwedo'
import Leadershipteam from '../../components/studiocomponent/leadershipteam'

export default function Studio() {
  return (
    <>
        <Studioherobanner />
        <Studioarchitect />
        <Designdna />
        <Whatwedo />
        <Leadershipteam />
    </>
  )
}
