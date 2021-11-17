import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import './CartWidget.css'


export const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart className="carrito"/>
    </div>
  )
}

export default CartWidget
