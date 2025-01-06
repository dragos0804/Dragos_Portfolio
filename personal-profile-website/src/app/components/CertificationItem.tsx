import React from 'react';
import './certificationItem.css';

export default function CertificationItem({item}: {
    item: {
        id: number;
        title: string;
        items: string[];
    }
}) {
    return (
        <div className="card h-100 shadow-lg certification-card">
            <div className="card-body d-flex flex-column">
                <h4 className="card-title">{item.title}</h4>
                <ul className="card-text">
                    {item.items.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

