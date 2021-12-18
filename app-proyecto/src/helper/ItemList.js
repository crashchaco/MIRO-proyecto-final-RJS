import React from 'react'

const ItemList = () => {

    const categories = [
        {id:'1', title:'APEX', description:'Juegos de pc', precio:'$20' },
        {id:'2', title:'COD 4', description:'Juegos de consolas', precio:'$30'},
        {id:'3', title:'CLASH ROYALE', description:'Juegos de dispositivos móviles', precio:'$40'}
    ];

  return (
    <div>
      {categories}
    </div>
  )
}

export default ItemList

