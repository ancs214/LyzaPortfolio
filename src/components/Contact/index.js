import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // we want to clear the input fields of name, email, message on component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        //if input is email, run validateEmail func and assign its return boolean value to isValid variable
        //The target event property returns the element that triggered the event.
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names. See computed property names mdn.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

        // console.log('errorMessage', errorMessage);
    }



    //   console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* htmlFor is same as 'for' attribute in JS
                        onBlur - fires event once user has changed focus from the input field */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea defaultValue={message} name="message" onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                {/* same as :   if(errorMessage){<div>.....</div>} */}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;