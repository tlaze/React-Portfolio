import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactMe() {

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus("Message Sent!");

    emailjs.sendForm(process.env.REACT_APP_EMAIL, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_USER)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter Your Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" name="email" required placeholder="email@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control as="textarea" name="message" required rows={4} />
            </Form.Group>
            <Button className="col-2 offset-5 bg-light" variant="light" type="submit" >{status}</Button>
          </Form>
        </div>
      </div>
    </div>
  )   
}

export default ContactMe;