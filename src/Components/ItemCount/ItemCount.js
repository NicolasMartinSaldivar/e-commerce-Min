import React, { useState } from 'react'
import Button from '@mui/material/Button'

export default function ItemCount({stock,onAdd}){

    const [itemCount,setItemCount] = useState(0);

    const updateItem = () =>{
        itemCount < stock && setItemCount(itemCount + 1);
        onAdd(itemCount + 1);
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