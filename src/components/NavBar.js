import React from 'react'
import './components.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navigation">
            <ul className="navigation">      
                    <NavLink exact to="/" className="link" >Home</NavLink>
                    <NavLink to="/about" className="link">About </NavLink>
                    <NavLink to ="/projects" className="link" >Projects</NavLink> 
                    <NavLink to="/skills" className="link" > Skills</NavLink> 
                    <NavLink to="/go-to" className="link" >Go to</NavLink>
                    <NavLink to ="/contact" className="link" > Contact</NavLink>  
           </ul>
        </div>
    )
}

export default NavBar;
