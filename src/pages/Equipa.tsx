import { useEffect } from "react";
import Navbar from "../components/navbar";
import BarberCard from "../components/barber_card";
import AOS from "aos";
import "aos/dist/aos.css";
import Contactus from "../components/contactus";
import { useBarbeiros } from "../hooks/barber_crud";

function Equipa() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const { barbeiros, addBarbeiro, addBarbeiros } = useBarbeiros();

  // Adiciona os barbeiros iniciais só se ainda não existirem
  useEffect(() => {
    if (barbeiros.length === 0) {
      addBarbeiros([
        {
          id: "1",
          nome: "Tiago Modesto",
          tipo: "Barbeiro",
          descricao:
            "Com talento, paixão e atenção ao detalhe, transformo cada corte de cabelo e barba numa experiência de confiança e estilo.",
          imagem: "../assets/images/barbermain.png",
        },
        {
          id: "2",
          nome: "João Silva",
          tipo: "Barbeiro",
          descricao:
            "Especialista em cortes modernos e clássicos, dedicado a proporcionar sempre o melhor serviço e satisfação ao cliente.",
          imagem: "../assets/images/barbermain.png",
        },
        {
          id: "3",
          nome: "Vasco Costa",
          tipo: "Barbeiro",
          descricao:
            "Especialista em cortes modernos e clássicos, dedicado a proporcionar sempre o melhor serviço e satisfação ao cliente.",
          imagem: "../assets/images/barbermain.png",
        },
      ]);
    }
  }, [barbeiros, addBarbeiros]);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Secção Sobre Nós */}
      <div className="pt-14 grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="p-10 md:p-20">
          <p className="font-montserrat text-7xl font-semibold text-[#9D9570]">
            SOBRE NÓS
          </p>
          <p className="mt-8 text-7xl font-extrabold font-poppins leading-tight tracking-wider text-black">
            Barbeiros
            <br />
            Licenciados
            <br />
            Profissionais
          </p>
          <a
            className="flex items-center justify-center w-2/4 h-14 bg-[#9D9570] text-white rounded-4xl text-center text-xl mt-10 font-poppins hover:bg-[#8A845F] transition-all duration-300"
            href="https://buk.pt/elite-barbershop"
          >
            Marcar
          </a>
        </div>
        <div>
          <img
            src="../assets/images/barberpoint.jpg"
            className="h-[calc(100vh-56px)] w-full object-cover object-top rounded-l-3xl"
            alt="Barber Point"
          />
        </div>
      </div>

      {/* Secção Barbeiros */}
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 mt-40">
        <div className="flex flex-col items-center mb-12">
          <p className="text-5xl font-bold font-montserrat text-black">
            <span className="border-b-4 border-[#9D9570] pb-2">Nossos Barbeiros</span>
          </p>
          <p className="text-[#9D9570] text-center max-w-2xl mt-4">
            Descubra a nossa equipa de profissionais que transformam cada corte de cabelo e barba numa experiência única de estilo e confiança.
          </p>
        </div>
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 justify-items-center">
          {barbeiros.map((barbeiro, idx) => (
            <div
              key={barbeiro.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <BarberCard
                nome={barbeiro.nome}
                tipo={barbeiro.tipo}
                descricao={barbeiro.descricao}
                imagem={barbeiro.imagem}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Secção Contacto */}
      <Contactus />

      {/* Rodapé (opcional) */}
      <footer className="bg-white py-4 text-center text-sm text-gray-600">
        © 2025 Elite Barber Shop. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Equipa;
