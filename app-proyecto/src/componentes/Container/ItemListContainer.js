import React from 'react';
import {ItemCount} from '../ItemCount/ItemCount';
import {ItemList} from '../../helper/ItemList';
import {useEffect,useState} from 'react';
import categoriesJson from './categoriesJson.json'
import './ItemListContainer.css'

export const ItemListContainer = () => {
    
  const [mensaje, setMensaje] = useState("Cargando...")

  const categories =  [
    {id:'1', title:'APEX', description:'Juegos de pc', precio:'$20' },
    {id:'2', title:'COD 4', description:'Juegos de consolas', precio:'$30'},
    {id:'3', title:'CLASH ROYALE', description:'Juegos de dispositivos móviles', precio:'$40'}
    ];



  const [productos, setProductos] = useState([])
  
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
   
  //  console.log(promesa)

   promesa
         .then((resultado) => {
           console.log(resultado)
           setMensaje("Todo salio bien")
           setProductos(resultado)
         })
         .catch(() => {
           console.log("salio todo mal")
           setMensaje("Todo salio mal")
         })
 
 },[])


 console.log(productos)

  return (

    <div className="container">
      <h1>{mensaje}</h1>

      <hr />
      {productos.map((elemento)=> {
        return <p>{elemento.title}</p>
      })}
      <hr />
      <ItemCount stock={5} initial={0}/>
      <hr />
      {/* <ItemList categories={categories}/> */}
    </div>
  )
}

export default ItemListContainer
