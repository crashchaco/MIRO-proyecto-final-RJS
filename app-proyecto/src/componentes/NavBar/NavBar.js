import React from 'react'
import logo from './../../../src/logo.png'

import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {useStateValue} from '../../helper/StateProvider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartWidget} from '../CartWidget/CartWidget'
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import {FaShoppingCart} from "react-icons/fa"
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { actionTypes } from '../../helper/Reducer';



export const NavBar = () => {

    const navigate = useNavigate();

    const [{basket, user},dispatch]= useStateValue();

    const resolverSalir = () => {
        if(user){
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            });
            navigate("/");
        }
    }

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

        

        <Typography className="usuario">
        Hola {user ? user.email : "Unnamed"}
        </Typography>
       

        <Button className="btnlogg" variant='outlined' onClick={resolverSalir}> 
        <Link className="btnlogg" to="/Signin">{user? "SIGN OUT" : "SIGN IN"} <FollowTheSignsIcon/></Link>
        </Button>

        
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
