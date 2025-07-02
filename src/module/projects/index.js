import React from 'react'
import Projectscomponent from '../../components/projectscomponents/projectscomponent'
import { useParams } from 'react-router-dom'
import Projectdetail from '../../components/projectscomponents/projectdetails';

export default function Projects() {
  const params = useParams();
  if (params.title) {
    return <Projectdetail title={params.title} />;
  }
  return (
    <>
      <Projectscomponent />
    </>
  )
}
