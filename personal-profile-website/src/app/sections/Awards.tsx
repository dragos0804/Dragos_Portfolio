import React from 'react'
import './awards.css'
import SectionTitle from '../components/SectionTitle';
import { awards } from '../data/data';

export default function Awards() {
    return (
        <section id='awards' className='awards'>
            <div className="container">
                <SectionTitle title='Awards' brief='' />
                <div className="awards-timeline">
                    {awards.map((award) => (
                        <div key={award.id} className="award-item">
                            <div className="award-icon">
                                <i className='bx bx-trophy'></i>
                            </div>
                            <div className="award-content">
                                <h3 className="award-title">{award.title}</h3>
                                <ul className="award-list">
                                    {award.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


