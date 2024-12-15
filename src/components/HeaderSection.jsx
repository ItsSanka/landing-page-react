import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function HeaderSection() {
  return (
    <div id='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sample</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="">About</Link>
            <Link to="">Services</Link>
            <Link to="">Works</Link>
            <Link to="">Teams</Link>
            <Link to="">Testimonials</Link>
            <Link to="">Pricing</Link>
            <Link to="">Blog</Link>
            <Link to="">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderSection

