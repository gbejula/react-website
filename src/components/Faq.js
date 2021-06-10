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
              How soon will I get my clothes once it is dropped?
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
              How much does it cost to sew clothes?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                It depends on the material and the timeframe when the clothe
                will be collected, the design and the quantity. Please note that
                we are committed to delivering your clothes as soon as possible
                and once the material for the clothe is collected on time, the
                collection will also be faster.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              Where is the collection point for my clothe once it is ready?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                Your clothe(s) can be delivered to wherever you please once the
                destination is provided. However, please note that there is a
                1000 naira delivery amount for the mainland and 2000 naira
                delivery amount for the island.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              Where are your shops located?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                We have 2 shops at the moment. One is located at Yaba while the
                other one is located at Surulere. We working on providing
                another of our shops on the island.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
