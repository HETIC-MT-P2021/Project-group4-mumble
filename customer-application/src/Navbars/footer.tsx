import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Footer: React.FC = () => (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="bottom" >
        <Navbar.Brand href="#home">Je sais pas quoi mettre dans ce footer...</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Connecté en tant que: <a href="#login">Jawad Script</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

export default Footer;