import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <div className="App">

      <BrowserRouter>

      <NavBar/>
      
      <Routes>
        <Route path={'/'} element={<ItemListContainer greeting='¡Bienvenido a nuestro e-commerce!'/>}/>
        <Route path={'/category/:categoryId'} element={<ItemListContainer/>}/>
        <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

