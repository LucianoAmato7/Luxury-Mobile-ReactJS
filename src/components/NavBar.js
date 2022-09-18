import CartWidget from './CartWidget';
import logo from '../img/logondb.png';
import navBackground from '../img/navBackground.png';


const NavBar = () => {

  const navBarStyle = {
    backgroundImage: `url( ${navBackground} )`,
    backgroundSize: 'cover'
  }

  return (
    <div className="navbar text-warning text-3xl italic" style={navBarStyle}>
      <div className="flex-1">
        <a>
          <img src={logo} alt='logo Dream-Burger' className='w-40 p-1'></img>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className='mx-3'><a className='active:bg-warning active:text-black hover:scale-125'>INICIO</a></li>
          <li className='mx-3'><a className='active:bg-warning active:text-black hover:scale-125'>MENÚ</a></li>
          <li className='mx-3'><a className='active:bg-warning active:text-black hover:scale-125'>CONTACTO</a></li>
          <li className='mx-3'><a className='active:bg-warning active:text-black hover:scale-125'><CartWidget/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

// SE HA UTILIZADO TAILWIND Y DAISYUI.