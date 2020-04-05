import React from 'react'
import './components.scss';
import GotoCard from '../greatChildren/GotoCard';
import NavBar from './NavBar';
import Footer from './Footer';

const Goto = () => {
    return (
        <div>
            <NavBar />
            <GotoCard />
            <Footer />
        </div>
    )
}

export default Goto;
