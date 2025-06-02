

function Navbar() {

  return (
    <nav className="ml-6 p-4">
      <div className=" flex justify-between items-center">
        <a href="#" className="text-black text-md font-semibold ">
          Elite Barber Shop
          {/*<img className="w-20 h-15 rounded-xl" src="https://image-uploader-service.firebaseapp.com/9660d094-7cfb-4a2b-b628-1939f236af3a/IMG_4929.jpeg?w=1200"></img>*/}
        </a>


        <ul className="flex space-x-6 text-black mr-24">
          <li><a href="#" className="hover:underline">Início</a></li>
          <li><a href="#" className="hover:underline">Equipa</a></li>
          <li><a href="#" className="hover:underline">Galeria</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
