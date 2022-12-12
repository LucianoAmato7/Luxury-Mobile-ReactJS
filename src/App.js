import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/CartContext';
import Order from './components/Orders/Order';



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
            <Route path={'/Order'} element={<Order/>}/>

          </Routes>

        </BrowserRouter>
      
      </CartProvider>


    </div>
  )
}

export default App;

