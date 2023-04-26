import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";


function GlobalNavbar() {
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/punto1">Punto 1</NavDropdown.Item>
                            <NavDropdown.Item href="/punto2">Punto 2</NavDropdown.Item>
                            <NavDropdown.Item href="/punto3">Punto 3</NavDropdown.Item>
                            <NavDropdown.Item href="/punto4">Punto 4</NavDropdown.Item>
                            <NavDropdown.Item href="/punto5">Punto 5</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/puntos6-10">Puntos 6 al 10</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GlobalNavbar;