import React from 'react'
import Projectscomponent from '../../components/projectscomponents/projectscomponent'
import { useParams } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const params = useParams();
  if (params.title) {
    return <ProjectDetail title={params.title} />;
  }
  return (
    <>
      <Projectscomponent />
    </>
  )
}
