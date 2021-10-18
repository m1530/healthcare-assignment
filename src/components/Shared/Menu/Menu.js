import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-color">
            <Container>
                <Navbar.Brand href="#home">Dr Moyna Mia Medical Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        {/* <Nav.Link as={NavLink} to="#features">Features</Nav.Link>
                        <Nav.Link as={NavLink} to="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;