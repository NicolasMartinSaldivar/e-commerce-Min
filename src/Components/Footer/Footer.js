import './Footer.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


export default function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><Link to="/contact"><Button variant="text" >Contacto</Button></Link></li>
                <li><Link target="_blank" to="https://instagram.com/min.joyas"><Button variant="text">Instagram</Button></Link></li>
                <li> <Button>&copy; Min Joyas 2022</Button></li>
            </ul>
        </div>
    )
}