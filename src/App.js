import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1 className='text-5xl m-10 text-warning underline'>DREAM BURGER</h1>
      <ItemListContainer saludo='¡Bienvenido a nuestro e-commerce!'></ItemListContainer>
    </div>
  );
}

export default App;

