import React from 'react';
import { useNavigate } from 'react-router-dom';
import Projects from '../../components/projectscomponents/projectsdata/data';

function formatTitleForUrl(title) {
  return title.replace(/\s+/g, '-').toLowerCase();
}

export default function ProjectDetail({ title }) {
  const navigate = useNavigate();
  const project = Projects.find(
    p => formatTitleForUrl(p.title) === title
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <button onClick={() => navigate(-1)} style={{marginBottom: '2rem'}}>Back</button>
      <h1>{project.title}</h1>
      <h3>{project.location} &mdash; {project.year}</h3>
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        {Array.isArray(project.data) && project.data.length > 0 ? (
          project.data.map((img, i) => (
            <img key={i} src={img} alt={project.title + ' image ' + (i+1)} style={{maxWidth: '300px', borderRadius: '8px'}} />
          ))
        ) : (
          <img src={project.image} alt={project.title} style={{maxWidth: '300px', borderRadius: '8px'}} />
        )}
      </div>
    </div>
  );
} 