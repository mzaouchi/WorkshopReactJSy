import './App.css';
import './achref.css'
import Jamila from './Components/Jamila';
// import { Jamila, Youssef } from './Components/Jamila';
import baryoucha from './Joker.jpg'
import { Navbar, Container,Nav } from 'react-bootstrap';


function App() {
  var name = "Youssef Siala"
  var a = 6
  var b = 10
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          <h1 id='titre'>Workshop REACT JS</h1>  
          <h1>{name}</h1>       
          <h1>{a+b}</h1>
          <h2>FULLSTACK JS</h2>
          {/* <Jamila/>
          <Youssef/>          */}
          <Jamila/>
          <img src={baryoucha} alt='Not Found'/>   
          <img src='Dame.jpg' alt='Not Found'/> 
    </>
  );
}

export default App;
