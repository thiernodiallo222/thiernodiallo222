import React from 'react'
import NavBar from './NavBar';
// import Footer from './Footer';
import ContactChild from '../children/ContactChild';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <ContactChild />
            {/* <Footer /> */}
        </div>
    )
}

export default Contact
