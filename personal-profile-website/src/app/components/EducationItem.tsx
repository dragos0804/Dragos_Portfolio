import React from 'react';
import './educationItem.css';

export default function EducationItem({item}: {
    item : {
        name: string;
        date: string;
        institution: string;
        keywords: string;
        thesis?: string;
    }
}) {
  return (
    <div className="card h-100 shadow-lg education-card">
      <div className="card-body d-flex flex-column">
        <h4 className="card-title">{item.name}</h4>
        <h5 className="card-subtitle mb-2 text-muted">{item.date}</h5>
        <p className="card-text">{item.institution}</p>
        <div className="mt-auto">
          <p className="card-text">
            <small>
              <strong>Keywords:</strong> <i>{item.keywords}</i>
            </small>
          </p>
          {item.thesis && (
            <div className="mt-3 pt-3 border-top">
              <p className="card-text">
                <small>
                  <span className="font-weight-bold">Thesis: </span>
                  {item.thesis}
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
