import React from 'react'
import Redirect from '../components/Redirect';
import { Route, Link } from 'react-router-dom';
import './children.scss';

const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">
                               <Link to ="/better-professor" className="better-professor"> African market Place </Link>
                          <Route path="/better-professor" component={ Redirect }
                               loc="https://african-marketplace-front-end-rssjtm.netlify.app/"/>    
                     </div>
                 
                    <div className="box-med"> 
                          <Link to ="/african-market" className="better-professor"> African market Backend </Link>
                          <Route path="/african-market" component={ Redirect }
                               loc="https://sauti-africa.herokuapp.com/"/>    
                    </div>
                    <div className="box-small"> 
                    <Link to ="/game-of-life" className="better-professor"> Game of Life </Link>
                          <Route path="/game-of-life" component={ Redirect }
                               loc="https://quizzical-edison-40952e.netlify.app/"/>    
                    </div>
                </div>

                <div className="insider-lines">
                    <div className="box-small">
                          <Link to ="/african-market" className="better-professor"> Scheduler </Link>
                          <Route path="/african-market" component={ Redirect }
                               loc="https://linkcomingsoon"/>  
                     </div>
                    <div className="box-med"> box-five</div>
                    <div className ="box-long"> box-six</div>
                </div>

                <div className="insider-lines">
                    <div className="box-long"> box-seven</div>
                    <div className="box-med"> box-eight</div>
                    <div className ="box-small"> box-nine</div>
                </div>
            </div>     
        </div>
    )
}

export default ProjectsChild
