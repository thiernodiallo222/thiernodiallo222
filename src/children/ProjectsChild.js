import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { Route} from 'react-router-dom';
import './children.scss';


const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">
                    <HashLink  className="abdoul" to="//african-marketplace-front-end-rssjtm.netlify.app">Sauti-Africa's Market</HashLink>
                    
                     </div>
                 
                    <div className="box-med"> 
                    <HashLink className="abdoul" to="https://sauti-africa.herokuapp.com">Sauti-Africa Backend</HashLink>
                    </div>
                    <div className="box-small"> 
                    <HashLink className="abdoul" to="https://quizzical-edison-40952e.netlify.app">Game of life</HashLink>
                    </div>
                </div>
                                               
                <div className="insider-lines">
                    <div className="box-small">
                    <HashLink className="abdoul" to="https://african-marketplace-front-end-rssjtm.netlify.app">Scheduler for VBB Project</HashLink>
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
