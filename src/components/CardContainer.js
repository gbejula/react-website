import React from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';
import image4 from '../assests/images/4.jpg';
import image5 from '../assests/images/5.jpg';
import image6 from '../assests/images/6.jpg';

import './CardContainer.module.css';

const CardContainer = () => {
  return (
    <div>
      <h2>Our Collection</h2>
      <Container>
        <CardDeck className='mb-3'>
          <Card>
            <Card.Img variant='top' src={image4} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src={image5} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant='top' src={image6} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default CardContainer;
