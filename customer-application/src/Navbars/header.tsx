import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header: React.FC = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
        <Navbar.Brand href="home">Mumble (Not a troll name at all)</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="https://github.com/HETIC-MT-P2021/Project-group4-mumble">Github</Nav.Link>
                <NavDropdown title="Service" id="collasible-nav-dropdown">
                <NavDropdown.Item href="imageResize">Resize Image</NavDropdown.Item>
                <NavDropdown.Item href="home">Coming soon !</NavDropdown.Item>
                <NavDropdown.Item href="home">Coming soon !</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href="https://imgflip.com/i">
                Random memes
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;