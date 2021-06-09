import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

import classes from './Features.module.css';

const Features = () => {
  return (
    <div className={classes.features}>
      <h2>Our Services</h2>
      <Container>
        <CardDeck>
          <Card border='dark' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='dark' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='dark' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border='secondary' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Features;
