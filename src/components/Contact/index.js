import React, { useState } from 'react';

function ContactForm() {
    
    // we want to clear the input fields of name, email, message e4t on component loading
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const { name, email, message } = formState;


    function handleChange(e) {
        // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      console.log(formState);
      
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    {/* htmlFor is same as 'for' attribute in JS */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name"  />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea defaultValue={message} name="message" onChange={handleChange} rows="5"  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;