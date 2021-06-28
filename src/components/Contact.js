import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contact}>
      <Container>
        <h2 className='text-center'>Contact Us</h2>
        <Form>
          <Form.Group className={classes.input}>
            <Form.Control type='text' placeholder='Name' />
          </Form.Group>
          <Form.Group className={classes.input}>
            <Form.Control type='email' placeholder='Email' />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as='textarea'
              name=''
              id=''
              cols='300'
              rows='10'
              placeholder='message'
              className={classes.area}></Form.Control>
          </Form.Group>
          <Button variant='primary'>Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
