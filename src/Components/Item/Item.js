import {useState} from 'react'
import AddShoppingCart from '../AddShoppingCart/AddShoppingCart'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './Item.css'



export default function Item({data}){

   

    return(
        <div className="item-product">
            <Link to={`/products/${data.id}`}>
            <h2 className='title-product'><a>{data.name}</a></h2>
            <div className="image-product">
                <img src={`../../assets/${data.img}`} alt="imagen de producto" />
            </div>
            <p className='item-price'>${data.price}</p>
            {/* <ItemCount stock={data.stock}  /> */}
            <AddShoppingCart />
            </Link>
        </div>
    )
}