import React from 'react'
import AboutChild from '../children/AboutChild';
import NavBar from './NavBar';
import Footer from './Footer';
import './components.css';

const About = () => {
    return (
        <div >
            <NavBar />
            <AboutChild />
            <Footer />
        </div>
    )
};

export default About
