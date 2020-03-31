import React, { useState } from 'react';


const ContactChild = () => {
    const [user,  setUser] = useState({ name: "", email: "", message: "" });
    const handleChange = (e) => {
        setUser({  ...user, [e.target.name]:  e.target.value });
    }
    return (
        <div className="contact-container">
            <div className="contact-container insider-container">
            <h1 className="contact-title">CONTACT ME</h1>
            <input text="text" name="name" value={ user.name } placeholder="Full Name" onChange={handleChange}/>
            <input text="text" name="email" value={ user.email } placeholder="Email Address" onChange={handleChange} />
            <textarea type="text" value={ user.message } name="message" onChange={handleChange}></textarea>
            <button text="text">Submit</button>
            </div>
        </div>
    )
}

export default ContactChild;
