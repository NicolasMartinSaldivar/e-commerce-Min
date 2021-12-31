import { Button } from "@mui/material"
import {Link} from 'react-router-dom'
import { useState } from "react"

export default function ModalCart({products, total}){

    return(
    <div className={`box-cart active`}>
                {products.lenght === 0 ? (
                    <h2>No hay productos</h2>
                ) : (
                    <>
                    {products.map((product)=>{
                        return(
                            <div className='item-cart-list' key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.quantity}</p>
                        </div>
    
                        )
                 })} 
                 <div className="container-finish-buy">
                     <p>Total</p>
                     <p>{total}</p>
                     <Link to="/cart">
                        <Button>Finalizar compra</Button>
                     </Link>
                 </div>
                </>
                )}
            </div>
)}