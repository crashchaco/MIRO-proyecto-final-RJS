import React from 'react'
import logo from './../../../src/logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import './NavBar.css'



export const NavBar = () => {

return (
    
    
    <header className="header">
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
       
        
        <Navbar bg="black" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">HOME</Nav.Link></Link>
                <Nav.Link href="#link">PC</Nav.Link>
                <Nav.Link href="#consolas">CONSOLAS</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Link to="checkout-page"> <CartWidget/> </Link>

    </header>
 )
}

export default NavBar
