import { Container } from 'react-bootstrap';
import Navigationbar from '../components/NavigationBar'
// import Button from 'react-bootstrap/Button'

const aboutme = () => {
    return (
        <div>
          <Navigationbar anim/>
          <Container fluid style={{backgroundColor:"#303131"}}>
            <div className="display-3 py-4" style={{color:"white", paddingTop: 40}}>ABOUT ME</div>
            <hr style={{backgroundColor:"white", height: 1, width: 500}} />
          </Container>
          
        </div>
      );
}

export default aboutme
