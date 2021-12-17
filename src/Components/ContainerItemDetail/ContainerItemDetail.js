import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ContainerItemDetail(){
    const [product,setProduct] = useState([])

    const dataProducts= {
        id: 1,
        name: 'aro 1',
        price: 1400,
        stock: 10,
        img: 'aro1.jpeg'
    }

    const getProduct = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(dataProducts);

        }, 2000)
    })

    useEffect(()=>{
        getProduct.then(data=>{
            console.log("respuesta de promesa", data)
            setProduct(data)
        })
    }, [])
    return(
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}