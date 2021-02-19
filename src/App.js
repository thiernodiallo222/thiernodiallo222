import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Goto from './components/Goto';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
  <Router>
        <Switch>
          <Route path="/go-to" component={Goto}/>
              <Route path="/contact" component={Contact}/>
           <Route path="/skills" component={Skills}/>
             <Route path="/projects" component={Projects}/>
           <Route path='/about' component ={About} />
            <Route exact path="/" component={Home}/>
        </Switch> 
    </Router>
    </div>   
  );
}
export default App;
