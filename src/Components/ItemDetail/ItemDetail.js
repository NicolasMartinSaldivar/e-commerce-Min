import react from 'react'

export default function ItemDetail({data}){
    console.log(data)
    return(
        <>
            <div>
                <p>{data.id}</p>
                <p>{data.name}</p>
            </div>
        </>
    )
}