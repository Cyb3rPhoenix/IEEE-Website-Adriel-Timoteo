import React, { useEffect } from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Navigationbar from '../components/NavigationBarAnim'
import Footer from '../components/Footer'
import headerPic from './header-pic.png'
import headerTitle from './header-title.png'
import Aos from "aos"
import "aos/dist/aos.css"

// import Button from 'react-bootstrap/Button'

const Homepage = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div>
            <Navigationbar/>
            <div style = {{backgroundAttachment: 'fixed'}}>
                <Image src = {headerPic} fluid style={headerPicStyle}/>
                <Image src = {headerTitle} fluid data-aos="fade-right" style={headerTitleStyle}/>
            </div>
            <Container fluid style={{backgroundColor:"#303131"}}>
                <Row className="py-5">
                    <Col className="col-12">
                        <h1 style={sectionTitle}>Biography</h1>
                    </Col>
                    <hr style={{backgroundColor:"white", width: 700}} />
                </Row>
                <Row className="pb-5">
                    <Col>
                        <p className="sectionText">Adriel Timoteo was born and raised in Jakarta, Indonesia in 2002. Even at an early age, Adriel has always been very interested and curious in the world of science and technology. His first experience with programming was when he signed up for a local robotic course for children in his hometown, where he was able to learn how to program a lego robot to do various things. Since then, Adriel's passion for computers and programming only grew stronger.</p>
                        <p className="sectionText">Entering middle school, Adriel started taking his passion for computers more seriously, and that was when he learned his first programming language, Python. So that by high school he was able to make simple programs and games using Python. Following that, a programming course coincidentally opened so close to his place. Adriel decided to take the course and during that course, he was able to get his first meeting with web development. He learned key languages, such as HTML, CSS, and Javascript, to program front-end websites, and also learned a few back-end logics with languages, for example SQL.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
      );
}

const headerPicStyle = {
    position: 'absolute',
    zIndex: 0,
}

const headerTitleStyle = {
    position: 'relative',
    zIndex: 1,
    backgroundAttachment: 'fixed'
}

const sectionTitle = {
    textAlign: "center",
    color: "white"
}

export default Homepage
