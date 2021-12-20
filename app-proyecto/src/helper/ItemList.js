import React from 'react'
import {Item} from '../componentes/Item/Item'
import { FaProductHunt } from 'react-icons/fa'

export const ItemList = ({categories}) => {

    // const categories = [
    //     {id:'1', title:'APEX', description:'Juegos de pc', precio:'$20' },
    //     {id:'2', title:'COD 4', description:'Juegos de consolas', precio:'$30'},
    //     {id:'3', title:'CLASH ROYALE', description:'Juegos de dispositivos móviles', precio:'$40'}
    // ];

    console.log("aca estan los productos del itemListContainer",categories)

  return (
    <ul>
      {categories.map(product => <Item key={product.title} product={categories}/>)}
    </ul>
  )
}

export default ItemList

