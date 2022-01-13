import { Button } from "@mui/material"
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useState } from "react"
import './ModalCart.css'

export default function ModalCart({products, total}){

    return(
    <div className={`box-cart active`}>
                {products.lenght === 0 ? (
                    <h2>No hay productos</h2>
                ) : (
                    <>
                    {products.map((product)=>{
                        return(
                        <Container>
                            <Grid container spacing={3}>
                            <div className='item-cart-list' key={product.id}>
                                <p>Nombre</p>
                                <p>{product.name}</p>
                                <p>Cantidad</p>
                                <p>{product.quantity}</p>
                            </div>
                            </Grid>
                        </Container>        
                        )
                 })} 
                 <div className="container-finish-buy">
                     <Grid xs={3}>
                            <p>Total</p>
                            <p>{total}</p>
                     <Link to="/cart">
                        <Button>Finalizar compra</Button>
                     </Link>
                     </Grid>
                 </div>
                </>
                )}
            </div>
)}