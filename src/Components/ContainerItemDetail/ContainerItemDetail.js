import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'


export default function ContainerItemDetail(){
    const [product,setProduct] = useState([])
    const { id } = useParams()
    
    const dataProducts= [{
        id: 1,
        name: 'aro 1',
        price: 1400,
        stock: 10,
        img: 'aro1.jpeg'
    },
    {   
        id: 2,
        name: 'aro 2',
        price: 1400,
        stock: 1,
        img: 'aro2.jpeg'
    },
    {   
        id: 3,
        name: 'aro 3',
        price: 1400,
        stock: 4,
        img: 'aro3.jpeg'
    },
    {   
        id: 4,
        name: 'aro 4',
        price: 1400,
        stock: 8,
        img: 'aro4.jpeg'
    }]

    const getProduct = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(dataProducts);

        }, 2000)
    })

    useEffect(()=>{
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {  
                if (resultProduct.id === parseInt(id)){
                    setProduct(resultProduct)
                }
            })
            })
    }, [])
    return(
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}