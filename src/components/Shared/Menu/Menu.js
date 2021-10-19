import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {

    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-color">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Dr Moyna Mia Medical Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={NavLink} to="/career">Career</Nav.Link>
                        {
                            user?.displayName && <Nav.Link className="text-white">{user.displayName}</Nav.Link>
                        }
                        {
                            user.displayName ? <button className="logout-btn" onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;