import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    


  return (

    <div className="container">
      <h1>{greeting}</h1>
      <hr />
    </div>
  )
}

export default ItemListContainer
