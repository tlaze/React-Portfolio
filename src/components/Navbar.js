import {Navbar, Container, Nav} from 'react-bootstrap'

function navBar() {
    return(
        <Navbar fixed="top" expand="sm" bg="dark" variant="dark">
            <Container className="ms-1 container-fluid">
            <Navbar.Brand href="#home">Tom Lazore</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className="mx-4" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="mx-4" href="#contact">Contact Me</Nav.Link>
                        <Nav.Link className="mx-4" href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navBar;