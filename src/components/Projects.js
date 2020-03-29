import React from 'react'
import './components.css';
import ProjectsCard from '../greatChildren/ProjectsCard';
import NavBar from './NavBar';
import Footer from './Footer';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <ProjectsCard />
            <Footer />
        </div>
    )
}

export default Projects
