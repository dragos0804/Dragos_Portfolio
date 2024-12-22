import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section id='about' className='about'>
        <div className="container">
            <SectionTitle title="about" brief = "I am a dedicated and creative individual driven by my passions and professional endeavours. I am a quick learner, always eager to explore new concepts and apply innovative ideas to build my skill set. With strong communication skills, I can convey ideas effectively in various situations. I thrive both in collaborative environments and when working independently. I am passionate about the field of computer science and its many applications in developing the world around me, therefore, I am eagerly anticipating the continuation of my academic journey in this dynamic and exciting field with a master’s degree."/>
        </div>
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8 pt-4 pt-lg-0 content"></div>
        </div>
    </section>
  );
}
