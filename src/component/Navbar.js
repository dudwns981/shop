import React from 'react'
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";


function Nav__bar() {
	return (
		<div>
			<Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/list">
              List
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/test">
              test
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
		</div>
	)
}

export default Nav__bar
