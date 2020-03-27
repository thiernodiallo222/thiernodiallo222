import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Goto from './components/Goto';
import Footer from './components/Footer';
import Contact from './components/Contact';


import './style.css';

function App() {
  return (
    <div className="application">
      <div className="navigation">
          <NavBar />
      </div>
      <div className="middle-section">
        <div className="middle-items about">
        <About />
        </div>
         <div className="middle-items projects">
        <Projects />
        </div>
          
     <div className="middle-items skills">
        <Skills />
        </div>
        <div className="middle-items contact">
        <Contact />
        </div>

         <div className="middle-items go-to">
        <Goto />
        </div>
      </div>
      {/* <Router>
                <Switch>
                <Route exact path="/" component={About}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/goto" component={Goto}></Route>
                <Route path="/contact" component ={Contact}></Route> */}
                
                {/* </Switch> 
            </Router> */}
     
       <div className="footer">
          <Footer />
      </div> 
    </div>
  );
}

export default App;
