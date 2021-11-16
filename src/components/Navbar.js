import {Navbar, Container, Nav} from 'react-bootstrap'
import React from 'react';
import '../styles/NavBar.css';
import myResume from '../assets/pdf/Portfolio_Resume.pdf';

function NavBar({ currentPage, handlePageChange }) {
    const styles = {
        navStyle:{
            backgroundColor: '#d2dbde',
        }
    }
    return(
        <Navbar className="navbar-fixed-top container-fluid" expand="md" style={styles.navStyle}>
                <Navbar.Brand className="brand ms-1 text-light">Tom Lazore</Navbar.Brand>
                <Navbar.Toggle className="me-1" />
                <Navbar.Collapse className="justify-content-center">
                    <Nav>
                        <Nav.Link id="about" className={ currentPage === 'about' ? 'nav-link active' : 'nav-link' } href="#about" onClick={() => handlePageChange('about')}>About Me</Nav.Link>
                        <Nav.Link id="project" className={currentPage === 'projects' ? 'nav=link active' : 'nav-link' } href="#projects" onClick={() => handlePageChange('projects')}>Projects</Nav.Link>
                        <Nav.Link id="contact" className={currentPage === 'contact' ? 'nav=link active' : 'nav-link' } href="#contact" onClick={() => handlePageChange('contact')}>Contact Me</Nav.Link>
                        <Nav.Link id="resume" href={myResume} download="Lazore_Thomas_Resume" rel="noreferrer">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;