import Navbar from "../components/navbar";


function Equipa()  {
    return(
        <div>
            <Navbar/>
            <div className="min-h-screen grid grid-cols-2 gap-4 p-8">
                <div className="bg-gray-200 p-4">Lado Esquerdo</div>
                <div className="bg-gray-400 p-4">Lado Direito</div>
            </div>
        </div>
    )
}

export default Equipa;


