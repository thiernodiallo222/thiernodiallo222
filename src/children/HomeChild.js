import React from 'react'
import { Link } from 'react-router-dom';
import About from '../components/About';
import { Route } from 'react-router-dom';
import './children.scss';
import HomeBackground from '../components/photos/HomeBackground.png';

const HomeChild = () => {
    return (
        <div className="home-container"  styles={{ backgroundImage:`url(${HomeBackground})`}}>
            <div className="center-text">
                <div className="welcome-text">
                    <div className="greeting-and-name">
                 <div>
                        Welcome ! I am
                    </div>
                    <div className="name-only"> Thierno Diallo. </div>
                    </div>
                    <div className ='profession'>
                        <div>I am a </div>
                    <div className="profession-only">Full Stack Web Developer.</div>
                   </div>
                    
                </div>
                <div className="home-button">
                    <Link to="/about" className="home-button">Find Out More Here </Link> </div>
            </div>

    <Route exact path="/about" component={About}></Route>
          
        </div>
    )
}

export default HomeChild;
