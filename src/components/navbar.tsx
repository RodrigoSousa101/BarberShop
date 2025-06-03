import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="ml-6 p-4">
      <div className=" flex justify-between items-center">
        <Link to="/" className="text-black text-md font-semibold ">
          Elite Barber Shop
        </Link>
        <ul className="flex space-x-6 text-black mr-24">
          <li><Link to="/" className="hover:underline">Início</Link></li>
          <li><Link to="/equipa" className="hover:underline">Equipa</Link></li>
          <li><Link to="/galeria" className="hover:underline">Galeria</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
