import React from 'react';

import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardDeck2: React.FC = () => {
    return (
      <Container className="p-3">
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/72/42/1d/72421db87a3d095d40e41dfba189e9bd.png" />
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
                <Card.Img variant="top" src="https://i.pinimg.com/originals/72/42/1d/72421db87a3d095d40e41dfba189e9bd.png" />
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
                <Card.Img variant="top" src="https://i.pinimg.com/originals/72/42/1d/72421db87a3d095d40e41dfba189e9bd.png" />
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
  
  export default CardDeck2;