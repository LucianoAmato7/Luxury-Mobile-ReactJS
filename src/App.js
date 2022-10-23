import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

function App() {

  return (
    <div className="App">

      <CartProvider>
        
        <BrowserRouter>

          <NavBar/>
          
          <Routes>
            <Route path={'/'} element={<ItemListContainer greeting='¡Bienvenido a nuestro e-commerce!'/>}/>
            <Route path={'/brand/:brandId'} element={<ItemListContainer/>}/>
            <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
          </Routes>

        </BrowserRouter>
      
      </CartProvider>


    </div>
  )
}

export default App;

