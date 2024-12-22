import React from 'react';
import './educationItem.css';
import { isSymbolObject } from 'util/types';

export default function EducationItem({item}: {
    item : {
        name: string;
        date: string;
        place: string;
        keywords: string;
        items: [string];
    }
}) {
  return (
    <div className="education-item">
        <h4>{item.name}</h4>
        <h5>{item.date}</h5>
        <p>{item.place}</p>
        <ul>
            <li><b>Keywords:</b> <i>{item.keywords}</i></li>
            {
                item.items.map((line, index)=><li key={index}>{line}</li>)
            }
        </ul>
    </div>
  );
}
