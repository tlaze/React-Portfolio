import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import {Form, Button } from 'react-bootstrap'

function ContactMe() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
        setEmail(inputValue);
    } 
    else if (inputType === 'name') {
        setName(inputValue);
    }
    else{
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Enter a Valid Email. Name and Message must be filled out.');
      return;
    }
    if(!email || !name || !message){
      setErrorMessage('Inputs must be filled out!');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  };

  const styles = {
    contactStyle: {
      marginTop:'25px',
      height:'100%',
    }
  }
  return(
    <div className="container-fluid" style={styles.contactStyle}>
      <div className="row">
        <div className="col-md-12">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 my-5">
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control
               type="text" 
               name="name" 
               placeholder="Enter Name" 
               value={name} 
               onChange={handleInputChange} 
               />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control
               type="email"
               name="email" 
               placeholder="name@example.com" 
               value={email} 
               onChange={handleInputChange}
               />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
               as="textarea"
               name="message" 
               rows={4} 
               value={message} 
               onChange={handleInputChange}
                />
            </Form.Group>
            <Button className="col-2 offset-5 bg-light" variant="light" type="submit" onChange={handleFormSubmit}>Submit
            </Button>
          </Form>
          {errorMessage && (
            <div>
              <p className="error-text text-center">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )   
}

export default ContactMe;