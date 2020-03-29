import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Goto from './components/Goto';
import Contact from './components/Contact';
import Home from './components/Home';


import './style.css';

function App() {
  return (
    <div className="app">
  <Router>
        <Switch>
  
              <Route exact path="/" component={Home}></Route>
              <Route path='/about' component ={About} ></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/go-to" component={Goto}></Route>
                <Route path="/contact" component ={Contact}></Route>
                 </Switch> 
            </Router>
    </div>   
  );
}
export default App;
