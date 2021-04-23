import React, { useEffect } from "react"
import { Container } from 'react-bootstrap';
import Navigationbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"
// import Button from 'react-bootstrap/Button'

const Myreason = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

    return (
        <div>
          <Navigationbar anim/>
          <Container fluid style={{backgroundColor:"#303131"}}>
            <div style={{paddingBottom: 40}}>
            <div className="display-3" style={{color:"white", paddingTop: 40}}>MY REASON</div>
            <hr style={{backgroundColor:"white", height: 0, width: 700}}/>
            <p className="sectionText" style={{paddingTop: 40}}>I was one of the participant in one of IEEE ITB's projects, the MileZero project. I didn't win, but it still was such a great experience for me and my team. Because of that, when i knew that IEEE ITB was recruiting officer, I really want to be a part of it because I felt that this organization could really help me grow. Other than that, I have always been interested in web development, but I never actually gotten to making a full public website. Through IEEE, I would like to take on projects to further my knowledge.</p>
            <p className="sectionText">I'm hoping that by joining IEEE SB ITB, I'd be able to make connections with my fellow IEEE colleagues and experts. I also hope to enhance my soft skills and hard skills. I want to be better at communicating with people, be responsible for my duties, and have a better time management. I also would like to increase my web development skills by joining the organization.</p>
            </div>
          </Container>
          <Container fluid style={{backgroundColor:"#304a55"}}>
            <div style={{paddingBottom: 40}}>
            <div className="display-4 py-4" style={{color:"white"}}>MY IDEAL TEAM</div>
            <p className="sectionText" style={{fontSize: 30, textAlign: 'center'}} data-aos="fade-right">A project manager</p>
            <p className="sectionText" style={{fontSize: 30, textAlign: 'center'}} data-aos="fade-left">One or two UI/UX designer(s)</p>
            <p className="sectionText" style={{fontSize: 30, textAlign: 'center'}} data-aos="fade-right">A front-end developer</p>
            <p className="sectionText" style={{fontSize: 30, textAlign: 'center'}} data-aos="fade-left">A back-end developer</p>
            <p className="sectionText" style={{fontSize: 30, textAlign: 'center'}} data-aos="fade-right">A full-stack developer</p>
            <p className="sectionText" style={{fontSize: 20, textAlign: 'center'}} data-aos="fade">With my current skill, my position in that team is to be a front-end developer. That position would be the best for me not only because I fell the most confident with front-end development, but because I can also learn from my fellow developers that knows back-end better that I am (and otherwise of course).</p>
            </div>
          </Container>
          <Footer />
        </div>
      );
}

export default Myreason
