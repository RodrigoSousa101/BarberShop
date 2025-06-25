

function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed  w-full z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <span className="text-white font-bold text-xl">Elite Barber Shop</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-gray-300 transition-colors duration-300">
                Início
              </a>
              <a href="#servicos" className="text-white hover:text-gray-300 transition-colors duration-300">
                Serviços
              </a>
              <a href="#sobre" className="text-white hover:text-gray-300 transition-colors duration-300">
                Sobre
              </a>
              <a href="#equipe" className="text-white hover:text-gray-300 transition-colors duration-300">
                Equipe
              </a>
              <a href="#contato" className="text-white hover:text-gray-300 transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
