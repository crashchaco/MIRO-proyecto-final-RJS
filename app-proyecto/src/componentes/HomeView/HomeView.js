import React from 'react'
import {NavBar} from '../NavBar/NavBar';
import {Footer} from  '../Footer/Footer';
import './HomeView.css'


export const HomeView = ({children}) => {    //tambien puedo desestruturar diretamente desde el objeto HomeView = ({titulo,contenido}).

    // const {titulo} = props  // desestructurando guardando en variable (titulo) el objeto.

    return (
        
        <main id="main">
            
            <NavBar/>

            {children}
            
            <Footer/>
            
        </main>
    )
}

export default HomeView
