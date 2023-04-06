import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
function Navs() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand  href="#home">Doc-RDV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link className="act">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Login/Register</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#Contact us">Contact us </Nav.Link>
            <Nav.Link > Search </Nav.Link>
            <Nav.Link > Icone + (+212)522123400 </Nav.Link>
            <Nav.Link href="#Contact us">
                <button>Contact us<span> {">"} </span></button> 
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navs;