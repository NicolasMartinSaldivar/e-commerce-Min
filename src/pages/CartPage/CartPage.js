import { Button } from "@mui/material"
import { useContext } from "react"
import CartContext from "../../context/cartContext"

export default function CartPage(){
    const {products,totalPrice} = useContext(CartContext)
    return(
        <>
        {products.map((product)=>{
            <div key={product}>
                <p>Productos</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        })}
        </>
    )
}