import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {


  return (
    <div className="navbar text-white text-3xl italic sticky top-0 z-50 bg-blue-900">
      <div className="flex-1">
        <Link to='/'>
          <p className='lg:text-6xl md:text-4xl m-5'>Luxury Crystal</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className='mx-5'><Link to={`/brand/${'Samsung'}`} className='active:bg-warning active:text-black hover:scale-125'>SAMSUNG</Link></li>
          <li className='mx-5'><Link to={`/brand/${'Apple'}`} className='active:bg-warning active:text-black hover:scale-125'>APPLE</Link></li>
          <li className='mx-5'><Link to={`/brand/${'Xiaomi'}`} className='active:bg-warning active:text-black hover:scale-125'>XIAOMI</Link></li>
          <li className='mx-12'><Link to='/cart' className='active:bg-warning active:text-black hover:scale-125'><CartWidget/></Link></li>
        </ul>
      </div>
    </div>

  );
}

export default NavBar;

