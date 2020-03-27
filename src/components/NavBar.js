import React from 'react'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Goto from './Goto';
import Contact from './Contact';
import Footer from './Footer';
import './components.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
               
               <NavLink to="/">About </NavLink>
               <NavLink to ="/projects">Projects</NavLink>
                <NavLink to="/skills"> Skills</NavLink>
                <NavLink to="/go-to">Go to</NavLink>
                <NavLink to ="/contact"> Contact</NavLink>
                
           </ul>
            <Router>
                <Switch>
                    <Route path="/" component={NavBar} />
                    <Route path="/" component={Footer} />
                    <Route path ='./about' component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/goto" component={Goto} />
                    <Route path="/contact" component ={Contact}/>                
                </Switch> 
            </Router>
     
        </div>
    )
}

export default NavBar;
