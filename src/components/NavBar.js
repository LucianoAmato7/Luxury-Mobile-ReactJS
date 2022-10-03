import CartWidget from './CartWidget';
import logo from '../img/logondb.png';
import navBackground from '../img/navBackground.png';
import {Link} from 'react-router-dom';


const NavBar = () => {

  const navBarStyle = {
    backgroundImage: `url( ${navBackground} )`,
    backgroundSize: 'cover'
  }

  return (
    <div className="navbar text-warning text-3xl italic sticky top-0 z-50" style={navBarStyle}>
      <div className="flex-1">
        <Link to='/'>
          <img src={logo} alt='logo Dream-Burger' className='w-40 p-1'></img>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className='mx-3'><Link to='/category/:categoryId' className='active:bg-warning active:text-black hover:scale-125'>HAMBURGUESAS</Link></li>
          <li className='mx-3'><Link to='/category/:categoryId' className='active:bg-warning active:text-black hover:scale-125'>ACOMPAÑAMIENTOS</Link></li>
          <li className='mx-3'><Link to='/category/:categoryId' className='active:bg-warning active:text-black hover:scale-125'>BEBIDAS</Link></li>
          <li className='mx-3'><Link to='' className='active:bg-warning active:text-black hover:scale-125'><CartWidget/></Link></li>
        </ul>
      </div>
    </div>

  );
}

export default NavBar;

// SE HA UTILIZADO TAILWIND Y DAISYUI.
