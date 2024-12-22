import React from 'react'
import './education.css'
import SectionTitle from '../components/SectionTitle';
import EducationItem from '../components/EducationItem';
import Image from 'next/image';
import imagePath from '../../../public/assets/images/study.jpg'

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
                    <div className="col-lg-6">
                        {items.map((item) => (
                            <EducationItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="col-lg-6">
                        <Image src={imagePath} alt='study picture' className="education-image" layout="responsive"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
