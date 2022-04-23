

import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../asset/img/logo.png'
import './Navbar.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="transparent" className='bg-transparent' expand="lg">
        <Container >
          <Navbar.Brand href="/"><img src={logo} alt='logo' className="logo-cus"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-center" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-center">
            <Nav className=" text-center justify-content-center">
              <Nav.Link href="/" >Desitnations</Nav.Link>
              <Nav.Link href="/test">Hotels</Nav.Link>
              <Nav.Link href="#">Flights</Nav.Link>
              <Nav.Link href="#">Bookings</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Sign up</Nav.Link>
              <NavDropdown title="EN" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#">EN</NavDropdown.Item> */}
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

