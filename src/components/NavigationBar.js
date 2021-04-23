import React, { useState, useRef, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigationbar = () => {
    
    return (
        <Navbar expand="md" sticky="top" style={{backgroundColor: "#304a55"}}>
        <Container fluid>
            <Navbar.Brand href="#home" style={navbarText}>Adriel Timoteo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/" style={navbarText}>Home</Nav.Link>
                <Nav.Link href="about-me" style={navbarText}>About Me</Nav.Link>
                <Nav.Link href="my-reason" style={navbarText}>My Reason</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

const navbarText = {
    color: "white",
    fontFamily: "product-sans",
}

export default Navigationbar