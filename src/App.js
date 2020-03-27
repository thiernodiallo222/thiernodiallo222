import React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Goto from './components/Goto';
import Footer from './components/Footer';


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
         <div className="middle-items go-to">
        <Goto />
        </div>
      </div>
       <div className="footer">
          <Footer />
      </div> 
    </div>
  );
}

export default App;
