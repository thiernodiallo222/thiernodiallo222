import React from 'react'
import './components.scss';
import ProjectsChild from '../children/ProjectsChild';
import NavBar from './NavBar';
import Footer from './Footer';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <ProjectsChild />
            <Footer />
        </div>
    )
}

export default Projects
