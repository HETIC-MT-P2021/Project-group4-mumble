import React from 'react';

import Container from 'react-bootstrap/Container';
import CardDeck1 from './cardDeck1';
import CardDeck2 from './cardDeck2';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <CardDeck1 />
      
      <CardDeck2 />
    </Container>
  );
};

export default App;
