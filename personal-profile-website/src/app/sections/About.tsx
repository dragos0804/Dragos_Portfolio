import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='about'>
        <div className="container">
            <SectionTitle title="about" brief = "In this section, you may find some information about myself. Please, use this information with caution and respect. Thank you!"/>
            <div className="row">

                <div className="col-lg-12 pt-4 pt-lg-0 content">
                    <div className="row">
                        <h3>Description</h3>
                        <p className="fst-italic">
                            I am a dedicated and creative individual driven by my passions and professional endeavours. I am a quick learner, always eager to explore new concepts and apply innovative ideas to build my skill set.
                        </p>
                        <p className="fst-italic">
                            With strong communication skills, I can convey ideas effectively in various situations. I thrive both in collaborative environments and when working independently.
                        </p>
                        <p className="fst-italic">
                            I am passionate about the field of computer science and its many applications in developing the world around me, therefore, I am eagerly anticipating the continuation of my academic journey in this dynamic and exciting field with a master’s degree.
                        </p>

                        <div className="row">
                            <br>
                            </br>

                            <br>
                            </br>

                            <br>
                            </br>
                        </div>
                        
                        <h3>
                            Personal Information & Contact
                        </h3>
                        <div className="col-lg-6">
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>Birthday:</strong> <span>8th of April, 2002</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>City:</strong> <span>Brașov</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>Phone:</strong> <span>+40 756 484 580</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>Age:</strong> <span>22</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>Country:</strong> <span>România</span>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>{' '}
                                    <strong>Gmail:</strong> <span>dragospaul120@gmail.com</span>
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
