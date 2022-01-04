import React from 'react'
import {useEffect,useState} from 'react';
import categoriesJson from './categoriesJson.json';

export const ItemDetailContainer = () => {

  const getItem = () => {
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
  }

  return (
    <div>
      
    </div>
  )
}

export default ItemDetailContainer

