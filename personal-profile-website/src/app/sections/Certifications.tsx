import React from 'react'
import './certifications.css'
import SectionTitle from '../components/SectionTitle';
import CertificationItem from '../components/CertificationItem';
import { certification } from '../data/data';

export default function Certifications() {
    return (
        <section id='certifications' className='certifications'>
            <div className="container">
                <SectionTitle title='Certifications' brief='' />
                <div className="row">
                    {certification.map((cert) => (
                        <div key={cert.id} className="col-lg-4 mb-4">
                            <CertificationItem item={cert} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}