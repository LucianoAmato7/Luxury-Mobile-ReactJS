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
        <button>
          <img src={logo} alt='logo Dream-Burger' className='w-40 p-1'></img>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className='mx-3'><button className='active:bg-warning active:text-black hover:scale-125'>INICIO</button></li>
          <li className='mx-3'><button className='active:bg-warning active:text-black hover:scale-125'>MENÚ</button></li>
          <li className='mx-3'><button className='active:bg-warning active:text-black hover:scale-125'>CONTACTO</button></li>
          <li className='mx-3'><button className='active:bg-warning active:text-black hover:scale-125'><CartWidget/></button></li>
        </ul>
      </div>
    </div>

  );
}

export default NavBar;

// SE HA UTILIZADO TAILWIND Y DAISYUI.
// LAS ETIQUETAS <BUTTON> SE PODRAN CAMBIAR A ETIQUETAS <A> DEPENDIENDO DE LA FUNCIONALIDAD DESEADA.