import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    


  return (

    <div className="container">
      <h1>{greeting}</h1>
      <hr />
      <ItemCount stock={5} initial={0} onAdd={0}/>
    </div>
  )
}

export default ItemListContainer
