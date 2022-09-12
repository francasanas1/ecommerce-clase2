import { useEffect, useState } from "react"
import { data } from "../utils/data";
import desafio from "../utils/promises"

const ItemProductos = () => {
    const [productos,setProdcutos] = useState([]);

    useEffect(() => {
        desafio(data)
            .then(result => setProdcutos(result))
            .catch(err => console.log(err))
    },[])

    return(
        <>
        {
            productos.map(item => (
                <>
                <h4>{item.nombre}</h4>
                <img src={item.imagen} alt=""/>
                </>
            ))
        }
        </>
    )
}


export default ItemProductos;