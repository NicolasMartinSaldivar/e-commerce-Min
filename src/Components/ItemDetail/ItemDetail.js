import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './ItemDetail.css'




export default function ItemDetail({data}){
    const [quantityItem , setQuantityItem] = useState(0)
    const {addProducts} = useContext(CartContext)
    const [itemCart, setItemCart] = useState({
        name: data.name,
        id: data.id,
        price: data.price,
        img: data.img,
        quantity:0
    })
    const onAdd = (value,name) =>{
        itemCart.quantity = value;
    }

    const sendItem = ()=>{
        addProducts(itemCart)
    }
   
    return(
        <>
        <Container className="product-item-detail">
            <div className='item-detail'>
                <Grid container spacing={2}>
                    <Grid item xs={8} className="container-img-detalle">
                    <img src={`../assets/${data.img}`} />
                    </Grid>
                    <Grid item xs={4} className='item-specific' >
                        <h2 className='item-name'>{data.name}</h2>
                        <p className='item-price'>$ {data.price}</p>
                    <Grid className='item-count' item xs={6}>    
                        <ItemCount alignContent="center" stock={data.stock} onAdd={onAdd}/>
                    </Grid>
                    <Link to='/cart'>
                        <Button variant="contained" color="success" size="large" onClick={sendItem} alignContent="center"><a>Agregar al carrito</a></Button>
                    </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>    
        </>
    )
}