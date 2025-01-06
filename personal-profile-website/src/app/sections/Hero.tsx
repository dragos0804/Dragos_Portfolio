'use client';

import React from 'react'
import './hero.css';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <section id='hero' className='d-flex flex-column justify-content-center'>
        <div className="container">
            <h1 className="hero-title">Dragoș-Paul Ciofalău</h1>
            <p className="hero-subtitle">
                I'm a{' '}
                <ReactTyped
                    strings={['developer', 'teacher', 'student', 'volunteer']}
                    typeSpeed={80}
                    backSpeed={50}
                    backDelay={2000}
                    loop
                />
            </p>
            <div className="social-links">
                <a href="mailto:dragospaul120@gmail.com" className="gmail">
                    <i className="bx bxl-gmail"></i>
                </a>
                <a href="https://www.linkedin.com/in/dragoș-paul-ciofalău-b689431b4" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/dragos0804" className="github">
                    <i className="bx bxl-github"></i>
                </a>
            </div>
        </div>
    </section>
  );
}

