import React, { useEffect } from "react"
import { Col, Container, Image, Row } from 'react-bootstrap';
import Navigationbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SWOT from './swot.png'
import ppLogo from './projek-poeisi-logo.png'
import lbLogo from './logo-lightbearer.png'
import iLogo from './Impact-logo.png'
import Aos from "aos"
import "aos/dist/aos.css"
// import Button from 'react-bootstrap/Button'

const Aboutme = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

    return (
        <div>
          <Navigationbar anim/>
          <Container fluid style={{backgroundColor:"#303131"}} className="centered">
            <div className="display-3" style={{color:"white", paddingTop: 40}}>ABOUT ME</div>
            <hr style={{backgroundColor:"white", width: 700}} />
            <Image src = {SWOT} fluid style={{paddingBottom: 40}} data-aos="fade-up"/>
          </Container>
          <Container fluid style={{backgroundColor:"#304a55"}}>
            <div className="display-4 py-5" style={{color:"white"}}>Organizational Experiences</div>
            <Container>
              <Row data-aos="fade-right">
                <Col className="col-8">
                  <div className="display-5" style={{color:"white"}}>ProjekPoeisi</div>
                  <p className="sectionText px-0">Was one of the core team when Projek Poeisi was founded for the first time,
and directly assisted the leader in managing the flow of the team and projects.
Later on, once Projek Poeisi started making animated visuals, his primary role
has been the designated video editor and animator.</p>
                </Col>
                <Col className="col-4" style={{height: 240}}>
                  <Image src = {ppLogo} fluid/>
                </Col>
              </Row>
              <Row data-aos="fade-left">
                <Col className="col-4 centered" style={{height: 240}}>
                  <Image src = {lbLogo} fluid/>
                </Col>
                <Col className="col-8">
                  <div className="display-5" style={{color:"white"}}>The Light Bearers</div>
                  <p className="sectionText px-0">Directly chosen to animate the promotional videos for “Songs of The Silk Road”, a Christian animated film made by a Christian community named "The Light Bearers Community" (Komunitas Pembawa Terang). Made a custom animated countdown sequence for the premiere.</p>
                </Col>
              </Row>
              <Row data-aos="fade-right" style={{height: 240}}>
                <Col className="col-8">
                  <div className="display-5" style={{color:"white"}}>STEI IMPACT 2021</div>
                  <p className="sectionText px-0">Is part of the documentation team at IMPACT. IMPACT is a Mathematics, Physics, and Informatics Competition designed by STEI for high school students. With a total prize of 10 million rupiah, IMPACT is one of the largest event that STEI holds.</p>
                </Col>
                <Col className="col-4 centered" style={{height: 240}}>
                  <Image src = {iLogo} fluid/>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid style={{backgroundColor:"#303131"}}>
            <Row>
              <Col>
                <div className="display-4 py-5" style={{color:"white"}}>How People Describe Me</div>
                <p className="sectionText" style={{fontSize: 20}}>"Adriel is a straightforward yet difficult person. By which i mean, he knows a certain standard to achieve when working on a task or project, but sometimes can get carried away by something that catches his attention. He has good approach to his work, especially those that might pick his interests. Sometimes, his ambition to finish tasks and projects can  still be achieved followed by an irresistible desire to rest due to hectic schedules."</p>
                <p className="sectionText" style={{fontSize: 30}}>- Kenneth Benedictus </p>
              </Col>
            </Row>
            <Row>
              <Col style={{paddingTop: 40, paddingBottom: 40}}>
                <p className="sectionText" style={{fontSize: 20}}>"I think of Adriel as my favourite partner in crime. After working together for a year now, I can confidently say that Adriel is a very reliable person both as a friend and as a teammate. I truly admire his persistence and commitment to things. He's also someone who is willing to step up just to get things done and tends to goes out of his way to make his project special."</p>
                <p className="sectionText" style={{fontSize: 30}}>- Jane Patricia Lee </p>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      );
}

export default Aboutme
