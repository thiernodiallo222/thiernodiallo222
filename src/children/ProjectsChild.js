import React from 'react'
import Redirect from '../components/Redirect';
import { Route, Link } from 'react-router-dom';
// import ProjectsCard from '../greatChildren/ProjectsCard';
import './children.scss';

const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">
                        <Link to ="/better professor" className="better-professor"> Better Professor </Link>
                          <Route path="/better-professor" component={ Redirect }
                               loc="https://better-professor-site.netlify.com/"  />     
                      </div>
                    <div className="box-med">  box-two   </div>
                    <div className="box-small">  box-three </div>
                </div>

                    <div className="insider-lines">
                    <div className="box-small"> box-four </div>
                    <div className="box-med"> box-five</div>
                    <div className ="box-long"> box-six</div>
                </div>

                <div className="insider-lines">
                    <div className="box-long"> box-seven</div>
                    <div className="box-med"> box-seven</div>
                    <div className ="box-small"> box-seven</div>
                </div>
            </div>     
        </div>
    )
}

export default ProjectsChild
