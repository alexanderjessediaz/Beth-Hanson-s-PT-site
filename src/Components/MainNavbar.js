import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Instagram from '../Images/Instagram.png'
import BethNavLogo from '../Images/BethNavLogo.png'


const MainNavbar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light" sticky="top">
            <Navbar.Brand href="http://localhost:3000/">
                <img alt='' src={BethNavLogo}/>
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={() =>
                    window.open("https://www.instagram.com/trainer.b/", "_blank"
                    )}>
                <img src={Instagram} alt="instagram"/>
            </Nav.Link>
            </Nav>
            <Nav className="mr-sm-2">
                <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                <Nav.Link href="http://localhost:3000/Contact">Contact</Nav.Link>
                <Nav.Link href="http://localhost:3000/Services">Services</Nav.Link>
                <Nav.Link href="http://localhost:3000/FAQ">FAQ</Nav.Link>
            </Nav>
        </Navbar>
    ) 
}

export default MainNavbar