import Navigationbar from '../components/NavigationBarAnim'
// import Button from 'react-bootstrap/Button'

const pagenotfound = () => {
    return (
        <div className="App">
          <Navigationbar />
          <h1>Oops, Looks like the page you're searching isn't here</h1>
          <h2>404 Not Found</h2>
        </div>
      );
}

export default pagenotfound
