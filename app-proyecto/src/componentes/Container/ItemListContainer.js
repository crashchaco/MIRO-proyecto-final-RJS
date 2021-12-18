import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount';
import {ItemList} from '../../helper/ItemList';
import {useEffect,useState} from 'react';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    
  const [mensaje, setMensaje] = useState("Cargando...")
  const categories = [
    {id:'1', title:'APEX', description:'Juegos de pc', precio:'$20' },
    {id:'2', title:'COD 4', description:'Juegos de consolas', precio:'$30'},
    {id:'3', title:'CLASH ROYALE', description:'Juegos de dispositivos móviles', precio:'$40'}
];

  useEffect(() => {


    const promesa = new Promise((res,rej)=> {
     
     setTimeout(() => {
       console.log("probando pedido")
     },2000)
     if(Math.random() > 0.5) {
       res(categories)
     }else {
       rej()
     }
   })
   
   console.log(promesa)

   promesa
         .then((resultado) => {
           console.log(resultado)
           setMensaje("Todo salio bien")
         })
         .catch(() => {
           console.log("salio todo mal")
           setMensaje("Todo salio mal")
         })
 
 },[])




  return (

    <div className="container">
      <h1>{mensaje}</h1>
      <h1>{greeting}</h1>
      <hr />
      <ItemCount stock={5} initial={0}/>
    </div>
  )
}

export default ItemListContainer
