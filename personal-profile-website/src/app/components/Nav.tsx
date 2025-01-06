'use client'

import React, { useState, useEffect } from 'react'
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {
    const [navList, setNavList] = useState(navs);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollTo = (section: string | undefined) => {
        if (section) {
            scrollToSection(section);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMobileNavActive(false);
    };

    const toggleMobileNav = () => {
        setIsMobileNavActive(!isMobileNavActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 100) {
                setActiveSection('');
                return;
            }

            for (const nav of navList) {
                if (nav.target) {
                    const section = document.getElementById(nav.target);
                    if (section) {
                        const sectionTop = section.offsetTop - 100;
                        const sectionBottom = sectionTop + section.offsetHeight;

                        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                            setActiveSection(nav.target);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navList]);

    return (
        <>
            <button className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-active' : ''}`} onClick={toggleMobileNav}>
                Menu
            </button>
            <nav id="navbar" className={`navbar nav-menu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
                <ul>
                    {
                        navList.map(nav => (
                            <li key={nav.id}>
                                <a
                                    onClick={() => handleScrollTo(nav.target)}
                                    className={`nav-link scrollto ${
                                        (nav.name === 'Home' && activeSection === '') ||
                                        activeSection === nav.target ? 'active' : ''
                                    }`}
                                >
                                    <i className={nav.icon}></i> <span>{nav.name}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
}

