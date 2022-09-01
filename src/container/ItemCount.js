import { useEffect, useState } from "react"

const ItemCount = ({ stock = 0, initial = 1 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, [])

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </>

    );

}


export default ItemCount;