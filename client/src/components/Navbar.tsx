import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <BootstrapNavbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container className="me-auto">
        <Nav>
        <Nav.Link as={NavLink} to="/" className="fs-4">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about"  className="fs-4">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/openai" className="fs-4">
          OpenAI
        </Nav.Link>
        </Nav>
        
      </Container>
    </BootstrapNavbar>
  );
}
