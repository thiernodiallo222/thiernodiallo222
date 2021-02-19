import React from 'react'
import AfricanMarket from './AfricanMarket';
import { HashLink } from 'react-router-hash-link';
import { Route, Link} from 'react-router-dom';
import './children.scss';


const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                    <div className="box-long">
                    <Route path="/african-market" component={AfricanMarket}>African Market</Route>
                     <Link to="/african-market" className="abdoul">African Market</Link>
                    
                     </div>
                 
                    <div className="box-med"> 
                    <Route path="/african-market-be" component={AfricanMarket}>African Market</Route>
                     <Link to="/african-market-be" className="abdoul">African Market Backend</Link>
                  
                    {/* <HashLink className="abdoul" to="https://sauti-africa.herokuapp.com">Sauti-Africa Backend</HashLink> */}
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
