

const ItemDetail = ({item})  => {

    return(
        <div>
            <div>{item.nombre}</div>
            <div>{item.precio}</div>
            <div>{item.stock}</div>
            <div>{item.imagen}</div>
        </div>
    )
}

export default ItemDetail;