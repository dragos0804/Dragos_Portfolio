import React from 'react'
import './education.css'
import SectionTitle from '../components/SectionTitle';
import EducationItem from '../components/EducationItem';

async function getEducationData() {
    const res = await fetch('http://localhost:3000/api/education');
    return res.json();
}

export default async function Education() {
    const items: [] | any = await getEducationData();

    return (
        <section id='education' className='education'>
            <div className="container">
                <SectionTitle title='Education' brief='' />
                <div className="row">
                    {items.map((item, index) => (
                        <div key={item.id} className="col-lg-4 mb-4">
                            <EducationItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
