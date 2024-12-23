import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section id='about' className='about py-5'>
      <div className="container">
        <SectionTitle 
          title="About Me" 
          brief=""
        />
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card h-100 shadow-lg about-card">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Description</h3>
                <p className="card-text">
                  I am a dedicated and creative individual driven by my passions and professional endeavours. I am a quick learner, always eager to explore new concepts and apply innovative ideas to build my skill set.
                </p>
                <p className="card-text">
                  With strong communication skills, I can convey ideas effectively in various situations. I thrive both in collaborative environments and when working independently.
                </p>
                <p className="card-text">
                  I am passionate about the field of computer science and its many applications in developing the world around me. Therefore, I am eagerly anticipating the continuation of my academic journey in this dynamic and exciting field with a master's degree.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card h-100 shadow-lg about-card">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Personal Information</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className='bx bx-user me-2'></i>
                    <strong>Age:</strong> <span>22</span>
                  </li>
                  <li className="mb-3">
                    <i className='bx bx-calendar me-2'></i>
                    <strong>Birthday:</strong> <span>8th of April, 2002</span>
                  </li>
                  <li className="mb-3">
                    <i className='bx bx-map me-2'></i>
                    <strong>City:</strong> <span>Brașov</span>
                  </li>
                  <li className="mb-3">
                    <i className='bx bx-flag me-2'></i>
                    <strong>Country:</strong> <span>România</span>
                  </li>
                  <li className="mb-3">
                    <i className='bx bx-phone me-2'></i>
                    <strong>Phone:</strong> <span>+40 756 484 580</span>
                  </li>
                  <li>
                    <i className='bx bx-envelope me-2'></i>
                    <strong>Email:</strong> <span>dragospaul120@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
