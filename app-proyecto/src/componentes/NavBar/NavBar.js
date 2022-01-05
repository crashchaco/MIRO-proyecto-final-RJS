import React from 'react'
import logo from './../../../src/logo.png'
import {CartWidget} from '../CartWidget/CartWidget'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import {useStateValue} from '../../helper/StateProvider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FaShoppingCart} from "react-icons/fa"
import './NavBar.css'



export const NavBar = () => {


    const [{basket},dispatch]= useStateValue();

return (
    
    
    <header className="header">
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
        
       
        
        <Navbar bg="Orange-Red" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">HOME</Nav.Link></Link>
                <Nav.Link href="#link">PC</Nav.Link>
                <Nav.Link href="#consolas">CONSOLAS</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Link to="checkout-page"> 
        <IconButton aria-label='show cart items' color="inherit">
        <Badge className="badge" badgeContent={basket.length} color='secondary'>
        <ShoppingCartIcon fontSize='large' color='white'/>
        </Badge>
        </IconButton>
        </Link>
        
    </header>
 )
}

export default NavBar
