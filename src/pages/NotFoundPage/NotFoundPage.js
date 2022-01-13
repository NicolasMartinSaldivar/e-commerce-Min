import './NotFoundPage.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'

export default function NotFoundPage(){
    return(
        <>
        <h2 className='error-404'>ERROR 404</h2>
        <h3>PAGE NOT FOUND</h3>

        <p>¿Quieres volver al sitio principal?</p>
        <p><Link to="/"><Button variant="text" >Home</Button></Link></p>
        </>
    )
}