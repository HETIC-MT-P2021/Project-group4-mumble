import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">
          This wonderful tool allows you to resize any image, amazing isn't it ?
        </h1>
      </Jumbotron>
    
        <Row className="justify-content-md-center">
            <Form>
                <Form.Group>
                    <Button variant="light">
                        <Form.File id="exampleFormControlFile1" label="Choose the image to resize" />
                    </Button>
                </Form.Group>
            </Form>
        </Row>
    </Container>
  );
};

export default App;
