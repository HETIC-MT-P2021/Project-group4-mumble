import React from 'react';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardDeck1: React.FC = () => {
    return (
      <Container className="p-3">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://www.memesmonkey.com/images/memesmonkey/9e/9ecdceb24db83f4f74a0202ae0f2cc30.jpeg" />
            <Card.Body>
              <Card.Title>Bigga n' Stronga</Card.Title>
              <Card.Text>
                Hey Boss, da ladz found a way to make yer images even bigga' than before ! Wanna try it, Boss ?
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
              <Button className="homeButton" href="imageResize" variant="danger">Resize image</Button>
            </Card.Footer>
          </Card>
          {/* Possibly More cards */}
          <Card>
            <Card.Img variant="top" src="https://memegenerator.net/img/images/15552106.jpg/" />
            <Card.Body>
              <Card.Title>Work in progress</Card.Title>
              <Card.Text>
                Nothin' to see here for the moment, Boss, the Meks are working on it, it'll soon be ready fer yah ! Maybe they could tell yah what to do while waitin' Boss.
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
              <Button className="homeButton" href="https://ih1.redbubble.net/image.703040413.3206/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg" variant="danger">Ask the Mekboyz</Button>
            </Card.Footer>
          </Card>
          
          <Card>
            <Card.Img variant="top" src="https://pics.me.me/dakka-32523694.png" />
            <Card.Body>
              <Card.Title>Work in progress</Card.Title>
              <Card.Text>
                Nothin' to see here for the moment, Boss, the Meks are working on it, it'll soon be ready fer yah ! Maybe they could tell yah what to do while waitin' Boss.
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
              <Button className="homeButton" href="https://ih1.redbubble.net/image.703040413.3206/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg" variant="danger">Ask the Mekboyz</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
  
        
  
      </Container>
    );
  };
  
  export default CardDeck1;