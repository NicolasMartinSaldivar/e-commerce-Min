import AddShoppingCart from '../AddShoppingCart/AddShoppingCart'
import Product from '../Product/Product'


export default function Item({data}){


    return(
        <div>
            <h2>{data.name}</h2>
            <div>
                <img src={`../../assets/${data.img}`} alt="imagen de producto" />
            </div>
            <p>${data.price}</p>
            <p>{data.stock}</p>
            <Product />
            <AddShoppingCart />
        </div>
    )
}