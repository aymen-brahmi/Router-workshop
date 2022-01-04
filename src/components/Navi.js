import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navi() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
     {/*<Link to="/">  <li >Home</li> </Link>
       <Link to="/Profiles"> <li >Profiles</li> </Link>
       <Link to="/Login">  <li >Login</li> </Link>*/} 
       <Nav.Link as={Link} to="/" >Home</Nav.Link>
       <Nav.Link as={Link} to="/Profiles" >Profiles</Nav.Link>
       <Nav.Link as={Link} to="/Login" >Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navi
