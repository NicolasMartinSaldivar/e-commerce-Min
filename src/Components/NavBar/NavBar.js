import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'





export default function NavBar(){
    return(
        <AppBar position="static">
        <nav>
            <div className="container-logo">
                <img src={logo} alt="logo min" />
            </div>
            <ul>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contactanos</Button></li>
            </ul>
            <div className="CartWidget">
                    <CartWidget />
            </div>
        </nav>
        </AppBar>
    )
}