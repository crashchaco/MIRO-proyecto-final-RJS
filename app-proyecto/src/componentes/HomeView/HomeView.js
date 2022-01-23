import React from 'react'
import {NavBar} from '../NavBar/NavBar';
import {Footer} from  '../Footer/Footer';
import {useEffect} from 'react'
import {Producto} from '../Productos/Producto';
import {Productos} from '../Productos/Productos';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CheckoutCard from '../CheckoutCard/CheckoutCard';
import SignIn from '../Signin/Signin';
import SignUp from '../Signup/Signup';
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import './HomeView.css'
import { auth } from '../firebase/firebase';
import {useStateValue} from '../../helper/StateProvider';
import { actionTypes } from '../../helper/Reducer';
import Checkout from '../CheckoutForm/Checkout';



export const HomeView = ({children}) => {    //tambien puedo desestruturar diretamente desde el objeto HomeView = ({titulo,contenido}).

    // const {titulo} = props  // desestructurando guardando en variable (titulo) el objeto.
    const [{user},dispatch]= useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
        if (authUser){
            dispatch({
                type: actionTypes.SET_USER,
                user: authUser,
                })
            }
        })
    },[])


    return (
        
        <main id="main">
                <BrowserRouter>
                    <NavBar/>

                    <Routes>
                        <Route path="/" element={<Productos/>} />
                        <Route path="/checkout-page" element={<CheckoutPage/>} />
                        <Route path="/Checkout" element={<Checkout/>} />
                        <Route path="/Signin" element={<SignIn/>} />
                        <Route path="/Signup" element={<SignUp/>} />
                    </Routes>
                    
                    {children}
                    <Footer/>
                </BrowserRouter>
            
        </main>
    )
}

export default HomeView
