import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button'

export default function Product({data}){

    const [itemCount,setItemCount] = useState(0);

    const updateItem = () =>{
        itemCount < data.stock && setItemCount(itemCount + 1);
    }
    const removeItem = () =>{
        itemCount > 0 && setItemCount(itemCount - 1);
    }

    return(
        <div>
            <Button variant="outlined" onClick={updateItem}>+</Button>
            <p>{itemCount}</p>
            <Button variant="outlined" onClick={removeItem}>-</Button>
        </div>
    )

}