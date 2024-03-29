import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'


function NavBar() {

 
  return (
    <div>
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><h1>TO DO LIST</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  );
}

  

export default NavBar