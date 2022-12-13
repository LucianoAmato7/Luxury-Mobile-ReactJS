import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import { Badge } from '@mui/material';
import { useContext, useState } from 'react';
import { CartContext } from '../Cart/CartContext';
import logoLM from '../../img/logoLM.png'
import '../../styles/NavBar.css'
import BurgerMenu from './BurgerMenu';


const NavBar = () => {

  const categories = ['Samsung', 'Apple', 'Xiaomi']

  const { cart } = useContext(CartContext)

  const TotalQuantity = () => {
    return cart.reduce( (acum, prod) => acum + prod.quantity, 0 )
  }

  //BurgerMenu
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if(window.innerWidth < 850) {
      setClicked(!clicked);
    }
  }


  return (
  
    <nav className="navbar text-white italic top-0 bg-black p-3 shadow-xl">

      <div className="flex-1">

        <Link to='/' className='flex flex-row'>

          <h2 className='text-3xl sm:text-5xl m-2 self-center brand'>Luxury Mobile</h2>

          <img src={logoLM} alt='Mano sosteniendo un teléfono inteligente' className='imgLogo'/>

        </Link>

      </div>

      <div className="flex-none">

        <ul className={`menu-horizontal p-0 items-center links ${ clicked ? 'activo' : '' }`}>

          {categories.map( brands => 

            <li className='text-xl sm:text-xl' key={brands}>

              <Link to={`/brand/${brands}`} onClick={ handleClick }>
              
                {brands.toUpperCase()}

              </Link>

            </li>

          )}
          
          <li className='mx-12'>

            <Link to='/cart' onClick={ handleClick } className='hover:scale-125'>

              <Badge badgeContent={ TotalQuantity() } color="error">

                <CartWidget/>

              </Badge>

            </Link>

          </li>
          
        </ul>
        
      </div>

      <BurgerMenu clicked={ clicked } handleClick={ handleClick }/>

      <div className={`bg initial ${ clicked ? 'activo' : ''}`}></div>
      
    </nav>

  );
}

export default NavBar;
