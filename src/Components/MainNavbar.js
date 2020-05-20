import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Instagram from '../Images/Instagram.png'
import BethNavLogo from '../Images/BethNavLogo.png'


const MainNavbar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light" sticky="top">
            <Navbar.Brand href="#">
                <img alt='' src={BethNavLogo}/>
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#"><img src={Instagram} alt="instagram"/></Nav.Link>
            </Nav>
            <Nav className="mr-sm-2">
                <Nav.Link href="#" >Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
        </Navbar>
    ) 
}

export default MainNavbar