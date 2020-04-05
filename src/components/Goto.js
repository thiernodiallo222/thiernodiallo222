import React from 'react'
import './components.scss';
import GotoChild from '../children/GotoChild';
import NavBar from './NavBar';
import Footer from './Footer';

const Goto = () => {
    return (
        <div >
            <NavBar />
            <GotoChild />
            <Footer />
        </div>
    )
}

export default Goto;
