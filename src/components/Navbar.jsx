import { NavLink } from "react-router-dom";

// Corrected path to your logo
import logo from '../assets/images/logo1.svg'; 

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink 
        to='/' 
        className="w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <img src={logo} alt='logo' className='w-3/4 h-3/4 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;