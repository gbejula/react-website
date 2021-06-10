import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';

import './Faq.module.css';

const Faq = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <Container>
        <Accordion defaultActiveKey='0' className='text-center w-75 mx-auto'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              Hoow soon will I get my clothes once it is dropped?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                You will receive it in 2 weeks after it is delivered to the
                shop.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
