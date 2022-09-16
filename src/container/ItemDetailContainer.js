import React, { useEffect, useState } from 'react'
import { data } from '../utils/data';
import ItemDetail from './ItemDetail'
 
export const ItemDetailContainer = () => {
  
  const [dato, setDato] = useState({});

  useEffect(() => {
    fetch(2000, data[3])
        .then(result => setDato(result))
        .catch(err => console.log(err))
  },[])

    return (
    <ItemDetail item={dato}/>
  )
}

export default ItemDetailContainer;