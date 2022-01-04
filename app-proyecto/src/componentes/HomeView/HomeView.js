import React from 'react'
import {NavBar} from '../NavBar/NavBar';
import {Footer} from  '../Footer/Footer';
import {Producto} from '../Productos/Producto'
import {Productos} from '../Productos/Productos'
import CheckoutPage from '../CheckoutPage/CheckoutPage'
import CheckoutCard from '../CheckoutCard/CheckoutCard'
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import './HomeView.css'


export const HomeView = ({children}) => {    //tambien puedo desestruturar diretamente desde el objeto HomeView = ({titulo,contenido}).

    // const {titulo} = props  // desestructurando guardando en variable (titulo) el objeto.

    return (
        
        <main id="main">
                <BrowserRouter>
                    <NavBar/>

                    <Routes>
                        <Route path="/" element={<Productos/>} />
                        <Route path="/checkout-page" element={<CheckoutPage/>} />
                    </Routes>
                    
                    {children}
                    <Footer/>
                </BrowserRouter>
            
        </main>
    )
}

export default HomeView
