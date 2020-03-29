import React from 'react'
import HomeChild from '../children/HomeChild';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeChild />
            <Footer />
        </div>
    )
}

export default Home
