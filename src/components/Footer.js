import React from 'react'
import { NavLink } from 'react-router-dom';
import './components.css';

const Footer = () => {
    return (
          <div className ="footer">
            <ul className ="footer">      
                    <NavLink exact to="/" className="link" >Home</NavLink>
                    <NavLink to="/about" className="link" >About </NavLink>
                    <NavLink to ="/projects" className="link" >Projects</NavLink> 
                    <NavLink to="/skills" className="link" > Skills</NavLink> 
                    <NavLink to="/go-to" className="link" >Go to</NavLink>
                    <NavLink to ="/contact" className="link" > Contact</NavLink>  
           </ul>
        </div>
    )
}
export default Footer; 

