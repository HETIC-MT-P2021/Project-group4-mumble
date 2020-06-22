import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          Welcome to Mumble, the best image resize tool currently on the market (yeah, I'm aware, it's free, but still) with an AWESOME placeholder !
        </h1>

        <Container className="p-5">
            <Button className="homeButton" href="modules" variant="danger" size="lg">
                Click here to get started 
            </Button>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default App;
