import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white p-4">
      <div className="flex justify-between items-center text-lg">
        <Link to="/" className="text-black text-md font-semibold">
          Elite Barber Shop
        </Link>
        <ul className="flex space-x-6 text-black mr-10">
          <li><Link to="/" className="hover:underline">Início</Link></li>
          <li><Link to="/equipa" className="hover:underline">Equipa</Link></li>
          <li><Link to="/galeria" className="hover:underline">Galeria</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
