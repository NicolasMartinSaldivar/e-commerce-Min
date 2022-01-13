import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
//firebase import
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import {doc , getDoc} from 'firebase/firestore';


export default function ContainerItemDetail(){
    const [product,setProduct] = useState([])
    const { id } = useParams()
    
    // const dataProducts= [{
    //     id: 1,
    //     name: 'aro 1',
    //     price: 1400,
    //     stock: 10,
    //     img: 'aro1.jpeg'
    // },
    // {   
    //     id: 2,
    //     name: 'aro 2',
    //     price: 1400,
    //     stock: 1,
    //     img: 'aro2.jpeg'
    // },
    // {   
    //     id: 3,
    //     name: 'aro 3',
    //     price: 1400,
    //     stock: 4,
    //     img: 'aro3.jpeg'
    // },
    // {   
    //     id: 4,
    //     name: 'aro 4',
    //     price: 1400,
    //     stock: 8,
    //     img: 'aro4.jpeg'
    // }]

    // const getProduct = new Promise( (resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve(dataProducts);

    //     }, 2000)
    // })

    // async function getProducts(db){
    //     const productosCol = collection(db, 'productos');
    //     const productosSnapshot = await getDocs(productosCol);
    //     const productosList = productosSnapshot.docs.map(doc =>{
    //         let producto = doc.data;
    //         producto.id = doc.id;
    //         return producto;
    //     });
    //     return productosList;
    // }


    async function getProduct(db){
        const docRef = doc(db,"productos",id);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document data :" , docSnap.data());
            let producto = docSnap.data();
            producto.id = docSnap.id;
            return producto;
        }else{
            console.log("No such document");
        }
    }

    useEffect(()=>{
        getProduct(db).then(resultsProducts => {
            resultsProducts.filter(resultProduct => {  
                if (resultProduct.id === parseInt(id)){
                    setProduct(resultProduct)
                }
            })
            })
    }, [id])
    return(
        <div>
            <ItemDetail data={product}/>
        </div>
    )
}