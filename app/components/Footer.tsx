import { Container, Nav, Navbar  } from "react-bootstrap";

export const Footer = () =>  (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
