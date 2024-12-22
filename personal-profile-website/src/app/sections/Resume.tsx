import React from 'react'
import './resume.css'
import SectionTitle from '../components/SectionTitle';
import ResumeItem from '../components/ResumeItem'

async function getResumeData() {
    const res = await fetch('http://localhost:3000/api/resume');
    return res.json();
}

export default async function Resume() {
    const items: [] | any = await getResumeData();
    const midPoint = Math.ceil(items.length / 2)

    return (
        <section id='resume' className='resume'>
            <div className="container">
                <SectionTitle title='Resume' brief='' />
                <div className="row">
                    <div className="col-lg-6">
                        {items.slice(0, midPoint).map((item) => (
                            <ResumeItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="col-lg-6">
                        {items.slice(midPoint).map((item) => (
                            <ResumeItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
