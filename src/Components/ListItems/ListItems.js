import React, {useEffect, useState} from 'react'
import './ListItems.css'
import Item from '../Item/Item'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'



export default function ListItems(){
    const [loader,setLoader] = useState(true);
    const [products,setProducts] = useState([])
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
    }
    ]

    const getProducts = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            resolve(dataProducts);

        }, 2000)
    })

    useEffect(()=>{
        getProducts.then((data)=>{
            console.log("respuesta de promesa", data)
            setProducts(data)
            setLoader(false)
        })
    }, [])


    return(
        <div>
            <h2>Productos</h2>
            <Container className = "product-container">
                    {
                        loader ? <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {
                                products.map( (product)=>{
                                    return(
                                        <Grid item xs={3} key={product.id}>
                                            <Item data={product}  />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid> 
                    }
            </Container>
        </div>
    )
}