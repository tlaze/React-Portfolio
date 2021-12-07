import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import {Form, Button } from 'react-bootstrap'

function ContactMe() {

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus("Sending..");

    const {name, email, message} = e.target.elements;

    let formInput = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formInput),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
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
              <Form.Control type="text" id="name" required placeholder="Enter Your Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" id="email" required placeholder="email@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control as="textarea" id="message" required rows={4} />
            </Form.Group>
            <Button className="col-2 offset-5 bg-light" variant="light" type="submit" >{status}</Button>
          </Form>
        </div>
      </div>
    </div>
  )   
}

export default ContactMe;