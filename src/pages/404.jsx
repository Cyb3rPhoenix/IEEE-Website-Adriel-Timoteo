import { Col, Container, Image, Row } from 'react-bootstrap';
import Navigationbar from '../components/NavigationBar'
import Footer from '../components/Footer'
// import Button from 'react-bootstrap/Button'

const pagenotfound = () => {
    return (
        <div className="App">
          <Navigationbar />
          <Container fluid style={{backgroundColor:"#303131", paddingBottom: 200}} className="centered">
            <div className="display-3" style={{color:"white", paddingTop: 40}}>Oops, Looks like the page you're searching isn't here</div>
            <div className="display-4" style={{color:"white", paddingTop: 40}}>404 Not Found</div>
          </Container>
          <Footer />
        </div>
      );
}

export default pagenotfound
