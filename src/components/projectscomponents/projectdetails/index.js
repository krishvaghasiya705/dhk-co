import React from 'react';
import "./projectdetails.scss"
import projects from '../projectsdata/data';

function formatTitleForUrl(title) {
    return title.replace(/\s+/g, '-').toLowerCase();
}

export default function Projectdetail({ title }) {
    // const navigate = useNavigate();
    const project = projects.find(
        p => formatTitleForUrl(p.title) === title
    );

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            {/* <button onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>Back</button> */}
            <div className="project-detail-main">
                <div className='projects-details-slider-main'>
                    <div className='projects-details-slider'>
                        {project.pagedata && project.pagedata[0] && project.pagedata[0].sliderdata && project.pagedata[0].sliderdata.length > 0 ? (
                            project.pagedata[0].sliderdata.map((slide, idx) => (
                                <div key={idx} className="projects-slider-item">
                                    <img src={slide.image} alt={slide.title || `slide-${idx + 1}`} />
                                    <div className='projects-slider-content'>
                                        {slide.number && <span>{slide.number}</span>}
                                        {slide.title && <p>{slide.title}</p>}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No slider data available.</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
} 