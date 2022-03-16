import { Container, Nav, Navbar  } from "react-bootstrap";

export const Navigation = () =>  (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="kory">Sydney and Kory's Wedding</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
