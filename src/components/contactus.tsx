function Contactus() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full max-w-lg">
        <p className="text-4xl font-extrabold font-montserrat mb-8 text-[#9D9570]">
          Contacte-nos!
        </p>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="w-full bg-white text-black placeholder-[#A59797] p-3 mt-4 rounded shadow"
        />
        <input
          type="text"
          placeholder="Insira um email válido"
          className="w-full bg-white text-black placeholder-[#A59797] p-3 mt-4 rounded shadow"
        />
        <textarea
          placeholder="Insira a sua mensagem"
          className="w-full h-32 bg-white text-black placeholder-[#A59797] p-3 mt-4 rounded shadow resize-none"
        />
        <button className="w-1/2 h-12 rounded-2xl text-white bg-[#9D9570] mt-8 hover:bg-[#b5af93] font-bold shadow transition-all duration-300">
          Submeter!
        </button>
      </div>
    </div>
  );
}

export default Contactus;