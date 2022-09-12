import ItemCount from "./ItemCount";

function ItemListContainter(props) {
    return(
        <ItemCount stock={5} initial={1}/>
    )
}

// const ItemListContainter = ({greeting}) => {
//     return ({greeting})
// }

export default ItemListContainter;