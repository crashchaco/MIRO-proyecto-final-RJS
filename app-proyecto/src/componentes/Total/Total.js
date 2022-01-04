import React from 'react'
import accounting from 'accounting'
import Button from 'react-bootstrap/Button'
import './Total.css'

export const Total = () => {
  return (
    <div className="mainTotal">
      <h5>Total Productos: 3</h5>
      <h5>{accounting.formatMoney(50)}</h5>
      <Button variant="secondary" className="botonTotal">Secondary</Button>{' '}
    </div>
  )
}

export default Total
