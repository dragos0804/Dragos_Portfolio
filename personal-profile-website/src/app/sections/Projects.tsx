import React from 'react'
import './projects.css'
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import { projects } from '../data/data';

export default function Projects() {
    return (
        <section id='projects' className='projects'>
            <div className="container">
                <SectionTitle title='Projects' brief='' />
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-6 mb-4">
                            <ProjectItem item={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

