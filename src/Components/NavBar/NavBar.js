import React from 'react'
import {useEffect, useState, useContext} from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import ThemeContext from '../../context/ThemeContext';


export default function NavBar(){
    const [fixedNavBar, setFixedNavBar] = useState(false)
    const {theme, changeTheme } = useContext(ThemeContext)
    useEffect(()=>{
        function onScrollWindow(){
            if(window.scrollY > 100){
                setFixedNavBar(true)
            }else{
                setFixedNavBar(false)
            }
        }
        window.addEventListener("scroll",onScrollWindow)
        return()=>{
            window.removeEventListener("scroll",onScrollWindow)
        }

    },[])
    console.log("theme desde NavBar", theme)
    return(
        <AppBar position={fixedNavBar ? "fixed" : "static"} className={theme ? 'theme-dark' : 'theme-light'}>
        <nav>
            <div className="container-logo">
                <img src={logo} alt="logo min" />
            </div>
            <ul>
                <li><Link to="/"><Button variant="contained">Home</Button></Link></li>
                <li><Link to="/category"><Button variant="contained">Productos</Button></Link></li>
                <li><Link to="/about"><Button variant="contained">Nosotros</Button></Link></li>
                <li><Link to="/contact"><Button variant="contained">Contactanos</Button></Link></li>
            </ul>
            <SwitchTheme changeTheme={changeTheme}/>
            <div className="CartWidget">
                <CartWidget />
            </div>
        </nav>
        </AppBar>
    )
}