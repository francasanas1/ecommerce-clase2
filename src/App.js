import './App.css';
import NavBar from './container/NavBar';
import ItemListContainter from './container/ItemListContainer';
import ItemProductos from './container/ItemProductos';
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainter/>
      <ItemProductos/>
    </div>

  );
}

export default App;
