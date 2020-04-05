import React from 'react'
import profileA from '../components/photos/profileA.png';
import profileB from '../components/photos/profileB.png';
// import '../components/components.css'
// import AboutCard from '../greatChildren/AboutCard';
import './children.scss';

const AboutChild = () => {
    return (
        <div className="section-container">

            <div className="section">
                <img src={profileA} alt="can't load " />
            </div>
           

            <div className="section">
                <div className="text-title">About me </div>
                <p>My name is Thierno Diallo, and I am a full stack web developer. I am currently attending Lambda School in the Full stack web development track. Prior to that I had a Bachelor Degree in Business Administration, and an Associate Degree in Computer Sciences. At Lambda, I am learning the LEAN stack, which involved java script for both the front End and the BackEnd. Talking about the front End development, I am familiar to HTML, JAVASCRIPT, and CSS. I also know React Js for the Front end web App development. For the BackEnd, I will be learning Node Js and Express. if I am not working and coding, I love to go weight lighting and running.
    </p>
            </div>

            <div className="section">
                <div className="text-title">Skills</div>
                <p>
                    As a Full Stack web developer,(LEAN STACK),  I work with CSS and HTML, and JavaScript, in the FrontEnd. For the backEnd, I will be exposed to NODE JS and EXPRESS JS wich will allow me to use JavaScript for a full development of a website. Beside that, I have some knowledge of Java, C++ and a bit of Python. In terms of Computer science, I have some knowledge of data structures and algorithms. Among other, I know arrays, LinkedLists, Stacks, queues, Tress, graphs and hash tables.
    </p>
            </div>
            <div className="section">
                <img src={profileB} alt="can't load " />
            </div>

        </div>
    )
};

export default AboutChild;
