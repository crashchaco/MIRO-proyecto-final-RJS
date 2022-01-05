import React from 'react';
import accounting from 'accounting';
import Button from 'react-bootstrap/Button';
import {getBasketTotal} from "../../helper/Reducer";
import {useStateValue} from '../../helper/StateProvider';
import './Total.css';

export const Total = () => {

  const [{basket},dispatch]= useStateValue();
  
  return (
    <div className="mainTotal">
      <h5>Total Productos: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
      <Button variant="secondary" className="botonTotal">PAGAR</Button>{' '}
    </div>
  )
}

export default Total
