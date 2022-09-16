import './App.css';
import NavBar from './container/NavBar';
import ItemListContainter from './container/ItemListContainer';
import ItemProductos from './container/ItemProductos';
import ItemDetailContainer from './container/ItemDetailContainer';
function App() {
  return (
    <div>
      <NavBar/>
      {/* <ItemListContainter/>
      <ItemProductos/> */}
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
