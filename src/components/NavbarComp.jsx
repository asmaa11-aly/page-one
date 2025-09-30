import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="py-3 m-0"
      style={{
        background: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
     
      }}
    >
      <Container>
       
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-white">
          Neuronix
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="main-nav" className="border-0" />

    
        <Navbar.Collapse id="main-nav" className="justify-content-between">
          <Nav className="fs-5 mx-auto" style={{ gap: "2rem" }}>
            <Nav.Link href="#service" className="text-white">Service</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact Us</Nav.Link>
            <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
          </Nav>

          <Button
            className="rounded-pill px-4 fw-semibold border-0 mt-3 mt-lg-0 "
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, #591DA9 28.85%, #051960 100%)",
              color: "#fff",
            }}
          >
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
