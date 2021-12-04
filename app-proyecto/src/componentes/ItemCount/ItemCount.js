import React from 'react'
import {Button} from 'react-bootstrap'
import './ItemCount.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemCount = ({stock, initial, onAdd}) => {
  

const SwalError = withReactContent(Swal)



  console.log(initial);
  console.log(stock);

const [contador=initial, setContador] = React.useState(initial);
const Carrito = onAdd;
console.log(contador);

const agregarItem = () => {
  if (contador < stock) {
    setContador(contador + 1)
  }
  else {
    SwalError.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No tenemos mas de 5 en Stock',
      
    })
  }
}

const restarItem = () => {

  if (contador < stock && contador != 0) {
    setContador(contador - 1)
  }
  else {
    SwalError.fire({
      icon: 'error',
      title: 'Oops...',
      
      
    })
  }
}

const agregarCarrito = () => {

  if (contador == contador) {
    onAdd = contador;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "Agregaste " + contador + " al carrito",
      showConfirmButton: false,
      timer: 1500
    })
  }
  else {
    
  }
}

  return (

    <div>
    <h1>El contador va:{contador}</h1>
    <Button variant="warning" onClick={agregarItem}>Sumar Producto</Button>
    <Button variant="warning" onClick={restarItem}>Restar Producto</Button>
    <Button variant="warning" onClick={agregarCarrito}>Agregar a Carrito</Button>
    </div>
  )
}

export default ItemCount
