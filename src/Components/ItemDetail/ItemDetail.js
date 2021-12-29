import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'




export default function ItemDetail({data}){
    const [quantityItem , setQuantityItem] = useState(0)
    const {addProducts} = useContext(CartContext)
    const [itemCart, setItemCart] = useState({
        name: data.name,
        id: data.id,
        price: data.price,
        quantity:0
    })
    const onAdd = (value) =>{
        itemCart.quantity = value;
    }

    const sendItem = ()=>{
        addProducts(itemCart)
    }
   
    return(
        <>
            <div>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.price}</p>
                <ItemCount stock={data.stock} onAdd={onAdd}/>
                <Button variant="contained" onClick={sendItem}><Link to='/cart'>Comprar</Link></Button>
            </div>
        </>
    )
}