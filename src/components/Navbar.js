import {Navbar, Container, Nav} from 'react-bootstrap'
import React from 'react';
import '../styles/NavBar.css';

function NavBar({ currentPage, handlePageChange }) {
    return(
        <Navbar fixed="top" expand="sm" bg="dark" variant="dark">
            <Container className="ms-1 container-fluid">
                <Navbar.Brand className={ currentPage === 'home' ? 'nav-link active' : 'nav-link' } href="#home" onClick={() => handlePageChange('home')}>Tom Lazore</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        <Nav.Link id="project" className={currentPage === 'projects' ? 'nav=link active' : 'nav-link' } href="#projects" onClick={() => handlePageChange('projects')}>Projects</Nav.Link>
                        <Nav.Link id="contact" className={currentPage === 'contact' ? 'nav=link active' : 'nav-link' } href="#contact" onClick={() => handlePageChange('contact')}>Contact Me</Nav.Link>
                        <Nav.Link id="resume" href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;