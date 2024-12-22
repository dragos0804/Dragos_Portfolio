import React from 'react'
import './education.css'
import SectionTitle from '../components/SectionTitle';
import EducationItem from '../components/EducationItem'

async function getResumeData() {
    const res = await fetch('http://localhost:3000/api/education');
    return res.json();
}

export default async function Education() {
    const items: [] | any = await getEducationData();

    return (
        <section id='education' className='education'>
            <div className="container">
                <SectionTitle title='Education' brief='' />
                <div className="col-lg-6">
                    {items.slice(midPoint).map((item) => (
                        <EducationItem key={item.id} item={item} />
                    ))}
                </div>
                
            </div>
        </section>
    )
}
