import React from 'react'
// import ProjectsCard from '../greatChildren/ProjectsCard';
import './children.css';

const ProjectsChild = () => {
    return (
        <div>
           
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">   box one  </div>
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
