import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 mb-4">
      <div className="container mx-auto flex justify-between">
        <NavLink to="/" className="text-white font-bold">
          Mi App
        </NavLink>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-4 ${isActive ? 'text-yellow-400 font-bold' : 'text-gray-300 hover:text-white'}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-yellow-400 font-bold' : 'text-gray-300 hover:text-white'}`
            }
          >
            Acerca de
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
