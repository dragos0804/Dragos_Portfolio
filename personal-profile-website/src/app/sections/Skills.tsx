import React from 'react'
import './skills.css'
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/data';

export default function Skills() {
    return (
        <section id='skills' className='skills'>
            <div className="container">
                <SectionTitle title='Skills' brief='' />
                <div className="row">
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="col-lg-6 mb-4">
                            <div className="skill-category">
                                <h3 className="skill-category-title">
                                    <i className={`bx bx-chevron-right`}></i>
                                    {skillCategory.category}
                                </h3>
                                {skillCategory.subcategories ? (
                                    skillCategory.subcategories.map((subcat, subIndex) => (
                                        <div key={subIndex} className="skill-subcategory">
                                            <h4 className="skill-subcategory-title">
                                                <i className={`bx bx-code-alt`}></i>
                                                {subcat.name}
                                            </h4>
                                            <ul className="skill-list">
                                                {subcat.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <ul className="skill-list">
                                        {skillCategory.details?.map((detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

