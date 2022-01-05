import React from 'react'
import {useStateValue} from '../../helper/StateProvider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {FaShoppingCart} from "react-icons/fa"
import './CartWidget.css'


export const CartWidget = () => {

  const [{basket},dispatch]= useStateValue();

  return (
    <div>
      <FaShoppingCart className="carrito"/>
    </div>
  )
}

export default CartWidget
