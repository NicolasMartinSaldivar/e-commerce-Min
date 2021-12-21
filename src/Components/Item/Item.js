import AddShoppingCart from '../AddShoppingCart/AddShoppingCart'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'



export default function Item({data}){


    return(
        <div>
            <Link to={`/products/${data.id}`}>
            <h2>{data.name}</h2>
            <div className="imagen-producto">
                <img src={`../../assets/${data.img}`} alt="imagen de producto" />
            </div>
            <p>${data.price}</p>
            <p>{data.stock}</p>
            <Product />
            <AddShoppingCart />
            </Link>
        </div>
    )
}