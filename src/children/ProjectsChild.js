import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Route} from 'react-router-dom';
import './children.scss';


const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">
                    <Link  className="abdoul" to="/https://african-marketplace-front-end-rssjtm.netlify.app/">Sauti-Africa's Market</Link>
                    
                     </div>
                 
                    <div className="box-med"> 
                    <Link className="abdoul" to="https://sauti-africa.herokuapp.com/">Sauti-Africa Backend</Link>
                    </div>
                    <div className="box-small"> 
                    <Link className="abdoul" to="https://quizzical-edison-40952e.netlify.app/">Game of life</Link>
                    </div>
                </div>

                <div className="insider-lines">
                    <div className="box-small">
                    <Link className="abdoul" to="https://african-marketplace-front-end-rssjtm.netlify.app/">Scheduler for VBB Project</Link>
                     </div>
                    <div className="box-med"> coming soon </div>
                    <div className ="box-long"> coming soon </div>
                </div>

                <div className="insider-lines">
                    <div className="box-long"> coming soon</div>
                    <div className="box-med"> coming soon </div>
                    <div className ="box-small"> coming soon</div>
                </div>
            </div>     
        </div>
    )
}

export default ProjectsChild
