import React from 'react'
// import AfricanMarket from './AfricanMarket';
import Redirect from '../Redirect'
// import { HashLink } from 'react-router-hash-link';
// import { Route, Link} from 'react-router-dom';
import './children.scss';


const ProjectsChild = () => {
    return (
        <div>
            <div className="project-page">

                <div className="insider-lines">
                     <div className="box-long">
                     <Redirect url='https://sauti-africa.herokuapp.com' name='African Market Bakend'/>
                
                     </div>
                 
                    <div className="box-med"> 
                    <Redirect url='https://african-marketplace-front-end-rssjtm.netlify.app' name='African Market Frontend'/>
                   
                    </div>
                    <div className="box-small"> 
                    <Redirect url='https://quizzical-edison-40952e.netlify.app' name='Game of life'/>
                    
                    
                    </div>
                </div>
                                               
                <div className="insider-lines">
                    <div className="box-small">
                    <Redirect url='https://github.com/thiernodiallo222/Village-Book-Builders-Fe' name='Scheduler | GITHUB'/>
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

// Regarding your hyperlink question, there are multiple ways to link to outside resources.
// The easiest is just to use a regular <a> in your JSX, just like we do with HTML.
// I have a component for websites that I use to keep my code DRY and a component for YouTube
// videos to accomplish the same thing. The format of the link in the component is this:
// <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.name}</a>
// The target attribute causes the link to open in a new window, which is nice to let the 
//user return to the same place on a website after visiting somewhere offsite.
// The rel attribute has two values. I sometimes omit noreferrer. Its used to stop the 
//linked website from knowing where traffic came from. Sometimes, I like the linked site 
//to know where its getting traffic from. In other cases, I prefer not to. If you use 
//noreferrer, it will look like the traffic originated from that site, like it was opened 
//from a bookmark.
// The noopener value I always use. It stops the linked website from being able to access 
//your site and make modifications with JavaScript. Its essentially a safety measure to 
//prevent some kinds of hacking or phishing.
// The last two items, the href attribute and the site name in between the opening and closing a-tag 
//just use props to pass in the website's address and name. I'm reading all of the data from various 
//arrays and just rendering them onscreen with the component. I've been doing this since we learned 
//JavaScript, but it got a lot easier with React. :wink:
// I hope this helps. Let me know if anything needs clarification!