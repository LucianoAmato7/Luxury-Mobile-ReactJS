import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './Cart/CartContext';
import logoLM from '../img/logoLM.png'

const NavBar = () => {


  const { cart } = useContext(CartContext)

  const TotalQuantity = () => {
    return cart.reduce( (acum, prod) => acum + prod.quantity, 0 )
  }

  return (

    <div className="navbar text-white text-3xl italic sticky top-0 z-50 bg-black">

      <div className="flex-1">

        <Link to='/' className='flex flex-row'>

          <p className='lg:text-6xl md:text-4xl m-5 self-center'>Luxury Mobile</p>

          <img src={logoLM} alt='Mano sosteniendo un teléfono inteligente' className='w-24'/>

        </Link>

      </div>

      <div className="flex-none">

        <ul className="menu menu-horizontal p-0">

          <li className='mx-5'><Link to={`/brand/${'Samsung'}`} className='active:bg-white active:text-black hover:scale-125'>SAMSUNG</Link></li>

          <li className='mx-5'><Link to={`/brand/${'Apple'}`} className='active:bg-white active:text-black hover:scale-125'>APPLE</Link></li>
          
          <li className='mx-5'><Link to={`/brand/${'Xiaomi'}`} className='active:bg-white active:text-black hover:scale-125'>XIAOMI</Link></li>
          
          <li className='mx-12'>

            <Link to='/cart' className='active:bg-white active:text-black hover:scale-125'>

              <Badge badgeContent={ TotalQuantity() } color="error">

                <CartWidget/>

              </Badge>

            </Link>

          </li>
          
        </ul>
        
      </div>
      
    </div>

  );
}

export default NavBar;

