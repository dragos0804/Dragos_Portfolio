import React from 'react';
import './educationItem.css';
import { isSymbolObject } from 'util/types';

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
    <div className="card h-100 shadow-sm education-card">
      <div className="card-body d-flex flex-column">
        <div className="education-item">
          <h4>{item.name}</h4>
          <h5>{item.date}</h5>
          <p>{item.institution}</p>
          <ul>
              <li><b>Related:</b> <i>{item.keywords}</i></li>
              {
                  item.thesis &&
                  (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm">
                          <span className="font-medium"><b>Thesis:</b></span>
                          {item.thesis} 
                        </p>
                      </div>) 
              }
          </ul>
          </div>
        </div>
    </div>
  );
}
