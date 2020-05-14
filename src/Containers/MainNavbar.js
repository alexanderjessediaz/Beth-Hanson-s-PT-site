import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'


const MainNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
            <Navbar.Brand href="#">
                <img 
                    src="https://uploads-ssl.webflow.com/5e8f60e580e03809212616c0/5e8f7785a438dd067c019495_Webp.net-resizeimage.png"
                    width="30"
                    height="30"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Instg</Nav.Link>
            </Nav>
            <Nav className="mr-sm-2">
                <Nav.Link href="#" >Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
        </Navbar>
    ) 
}

export default MainNavbar