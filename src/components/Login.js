import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>

        <Form.Group controlId='forBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary'>Sign In</Button>
      </Form>
    </div>
  );
};

export default Login;
