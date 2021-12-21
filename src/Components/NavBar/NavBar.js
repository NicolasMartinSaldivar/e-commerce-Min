import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'





export default function NavBar(){
    return(
        <AppBar position="static">
        <nav>
            <div className="container-logo">
                <img src={logo} alt="logo min" />
            </div>
            <ul>
                <li><Link to="/"><Button variant="contained">Home</Button></Link></li>
                <li><Link to="/product"><Button variant="contained">Productos</Button></Link></li>
                <li><Link to="/about"><Button variant="contained">Nosotros</Button></Link></li>
                <li><Link to="/contact"><Button variant="contained">Contactanos</Button></Link></li>
            </ul>
            <div className="CartWidget">
                    <CartWidget />
            </div>
        </nav>
        </AppBar>
    )
}