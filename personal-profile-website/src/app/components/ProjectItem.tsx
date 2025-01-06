import React from 'react';


export default function ProjectItem({item}: {
    item: {
        title: string;
        technologies: string[];
        description: string[];
    }
}) {
    return (
        <div className="card h-100 shadow-lg project-card">
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">{item.title}</h4>
                <div className="technologies mb-3">
                    {item.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">{tech}</span>
                    ))}
                </div>
                {item.description.map((desc, index) => (
                    <p key={index} className="card-text">{desc}</p>
                ))}
            </div>
        </div>
    );
}

