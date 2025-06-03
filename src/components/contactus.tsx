function Contactus() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 h-screen">
        <img
          className="h-full object-cover blur-xs"
          src="https://images.fresha.com/lead-images/placeholders/barbershop-110.jpg?class=venue-gallery-large&dpr=2"
          alt="Barbearia"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 bg-[#292D33] text-white ">
        <p className="text-5xl text-white mt-6 font-extrabold">Contacte-nos!</p>
          <input
            type="text"
            placeholder="Digite o seu nome"
            className="w-3/4 bg-white text-black placeholder-[#A59797] p-2 mt-10 rounded"
          />
          <input
            type="text"
            placeholder="Insira um email válido"
            className="w-3/4 bg-white text-black placeholder-[#A59797] p-2 mt-10 rounded"
          />
          <textarea
            placeholder="Insira a sua mensagem"
            className="w-3/4 h-40 bg-white text-black placeholder-[#A59797] p-2 mt-10 rounded"
          />

          <button className="w-1/2 h-10 rounded-2xl bg-[#9D9570] mt-10 hover:text-black">Submeter!</button>
      </div>
    </div>
  );
}

export default Contactus;