import React from 'react'
import SkillsCard from '../children/SkillsChild';
import NavBar from './NavBar';
import Footer from './Footer';
import './components.scss';

const Skills = () => {
    return (
      <div>
        <NavBar />
        <SkillsCard />
        <Footer /> 
        </div>
    )
}

export default Skills
