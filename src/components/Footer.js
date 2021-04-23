import React, { useState, useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    
    return (
        <footer style={{backgroundColor: "#304a55"}}>
            <div style={{backgroundColor: "#115959", height: 2}}/>
            <Container className="py-3">
                <Row>
                    <Col xs={6}>
                        <h5 style={footerText}>Adriel Timoteo</h5>
                        <h6 style={footerText}>STEI 2020</h6>
                    </Col>
                    <Col fluid>
                        <h5><a href="https://www.instagram.com/adriel_timoteo/?hl=en" style={footerText}>Instagram</a></h5>
                    </Col>
                    <Col fluid>
                        <h5><a href="https://twitter.com/timoteo_adriel" style={footerText}>Twitter</a></h5>
                    </Col>
                    <Col fluid>
                        <h5><a href="https://www.linkedin.com/in/adriel-timoteo-4433431b8/" style={footerText}>LinkedIn</a></h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

const footerText = {
    color: "white",
    fontFamily: "product-sans",
    textDecorationLine: "none",
    textDecorationColor: "none",
    textDecorationStyle: "none",
    textAlignVertical: "center"
}

export default Footer