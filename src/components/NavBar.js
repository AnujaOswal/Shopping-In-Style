
import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Button,
    Badge,
    Container,
  } from "react-bootstrap";
  import { FaShoppingCart } from "react-icons/fa";
  
export default function NavBar({ setShow, item }) {
    return (
        <div>
        {/* Top Navbar with dummy page links */}
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#" active>Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">All Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Popular Items</NavDropdown.Item>
                    <NavDropdown.Item href="#">New Arrivals</NavDropdown.Item>
              </NavDropdown>
            </Nav>

             {/* Cart button with the badge */}
             <Form inline>
              <Button
                variant="outline-dark"
                style={{ pointerEvents: item.length > 0 ? "auto" : "none" }}
                onClick={() => setShow("block")}
              >
                <FaShoppingCart />
                <span className="cartIcon">Cart</span>
                <Badge pill variant="dark">
                {item.length}
                </Badge>
              </Button>
            </Form>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}


