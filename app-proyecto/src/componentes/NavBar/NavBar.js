import React from 'react'
import logo from './../../../../../../proyectos/Proyecto_Final/app-proyecto/src/logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './NavBar.css'


export const NavBar = () => {
return (
    
    
    <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <nav id="navegacion">
            <ul id="menu">
                <li>Enlace 1</li>
                <li>Enlace 2</li>
                <li>Enlace 3</li>
            </ul>
        </nav> */}

        <Navbar bg="black" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">PC</Nav.Link>
                <Nav.Link href="#consolas">CONSOLAS</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

            <CartWidget/>

    </header>
 )
}

export default NavBar
