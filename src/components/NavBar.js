import React from 'react'
import './components.scss';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="navigation">
            <ul className="navigation">      
                    <NavLink exact to="/" className="link" >home</NavLink>
                    <NavLink to="/about" className="link">about </NavLink>
                    <NavLink to ="/projects" className="link" >projects</NavLink> 
                    <NavLink to="/skills" className="link" > skills</NavLink> 
                    {/* <NavLink to="/go-to" className="link" >other </NavLink> */}
                    <NavLink to ="/contact" className="link" > contact</NavLink>  
           </ul>
        </div>
    )
}

export default NavBar;
