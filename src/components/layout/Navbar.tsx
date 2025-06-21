import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 mb-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">Mi App</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mr-4">Inicio</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">Acerca de</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
