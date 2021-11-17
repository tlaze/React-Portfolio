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

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Enter a Valid Email. Name and Message must be filled out.');
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
              <Form.Control type="text" placeholder="Enter Name" name={name} value={name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name={email} value={email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name={message} value={message} onChange={handleInputChange} />
            </Form.Group>
            <Button className="offset-5" variant="light" type="submit">Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )   
}

export default ContactMe;



{/* <form className="form my-5">
<label for="email">Email</label>
<input className="col-3 offset-2" value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" />
<input className="col-3 offset-2" value={name} name="name" onChange={handleInputChange} type="text" placeholder="Full Name" />
<input className="col-8 offset-2 my-4" value={message} name="message" onchange={handleInputChange} type="text" placeholder="Message" />
<button className="offset-6" type="button" onClick={handleFormSubmit}>Submit</button>
{errorMessage && (
  <div>
    <p className="error-text text-center">{errorMessage}</p>
  </div>
)}
</form> */}