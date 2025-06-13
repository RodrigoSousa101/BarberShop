import Navbar from "../components/navbar";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImScissors } from "react-icons/im";
import { GiBeard } from "react-icons/gi";
import Contactus from "../components/contactus";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
      AOS.init({ duration: 700, once: false });
    }, []);

  return (
    <div>
      <Navbar />

      {/* Secção de boas-vindas */}
      <div className="ml-14 mt-8 pt-10 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="font-montserrat p-6">
          <p className="text-4xl text-gold font-semibold">Bem-vindo ao</p>
          <p className="text-5xl font-semibold mt-6">Elite Barber Shop</p>
          <p className="text-5xl font-semibold mt-2">Guimarães</p>

          <div className="w-full mt-10">
            <div>
              <div className="mt-4 flex">
                <CiLocationOn size={20} />
                <p className="ml-2">
                  Centro Comercial Villa, Av. Dom João IV 1027, 4810-225 Guimarães
                </p>
              </div>
              <div className="mt-4 flex">
                <FaPhoneVolume size={20} />
                <p className="ml-2">(351) 939 022 312</p>
              </div>
              <div className="mt-10">
                <a
                  href="https://buk.pt/elite-barbershop"
                  className="flex items-center justify-center w-1/4 h-14 bg-[#9D9570] text-white rounded-4xl text-xl font-poppins hover:bg-[#8A845F] transition-all duration-300 "
                >
                  Marcações
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full h-[calc(100vh-56px)] object-cover object-top"
            src="../assets/images/barbermain.png"
            alt="Barbearia"
          />
        </div>
      </div>

      {/* Secção Porquê escolher-nos */}
      <div  className="relative mt-2 min-h-screen bg-[url('https://st2.depositphotos.com/2931363/9695/i/600/depositphotos_96952028-stock-photo-young-handsome-man-in-barbershop.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex px-20 py-40 relative">
          <div  className="relative h-full w-1/2 z-10">
            <p className="text-4xl text-white font-bold">Por que escolher-nos?</p>
            <p className="text-xl text-white font-semibold">
              Além disso, aqui estão 5 razões pelas quais os homens preferem a Elite Barber Shop Guimarães:
            </p>
            <ul className="text-white text-lg list-disc ml-5 mt-2 space-y-5">
              <li>Ambiente sempre acolhedor e confortável.</li>
              <li>Os nossos profissionais são especialistas e focam-se na máxima qualidade.</li>
              <li>Valorizamos o tempo e o investimento dos nossos clientes.</li>
              <li>Trabalhamos apenas com produtos premium, hipoalergénicos e de alta qualidade.</li>
              <li>Todas as superfícies e ferramentas são limpas e desinfetadas antes e depois de cada utilização.</li>
            </ul>
          </div>
          <div className="w-110 h-130 relative bg-white ml-20 rounded-2xl flex flex-col items-center z-10">
            <p className="text-[#B5AF93] text-4xl font-bold p-10">Horários</p>
            <ul className="space-y-2 font-serif">
              <li className="text-2xl">Segunda: 09:00 - 20:00</li>
              <li className="text-2xl">Terça: 09:00 - 20:00</li>
              <li className="text-2xl">Quarta: 09:00 - 20:00</li>
              <li className="text-2xl">Quinta: 09:00 - 20:00</li>
              <li className="text-2xl">Sexta: 09:00 - 20:00</li>
              <li className="text-2xl">Sábado: 09:00 - 19:00</li>
              <li className="text-2xl">Domingo: Fechado</li>
            </ul>
            <div className="mt-8">
              <a
                href="https://buk.pt/elite-barbershop"
                className="font-bold w-40 h-12 shadow-sm rounded-xl border border-black flex items-center justify-center"
              >
                Marcar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Secção sobre a imagem */}
      <div className="relative min-h-screen bg-[url('../public/assets/images/giz_background.webp')] bg-cover bg-center flex">
        <div className="relative pt-20 pl-60">
          <img
            className="h-120 w-120 rounded-full object-cover"
            src="../assets/images/Barber_cut_home.avif"
            alt="Barbearia"
          />
          <div className="absolute p-8 top-2/5 left-3/4 bg-gray-100 w-130 h-90 rounded-4xl shadow-lg flex flex-col items-center font-poppins">
            <p className="text-4xl font-bold font-montserrat">Elite Barber Shop</p>
            <div className="text-gray-700">
              <p className="mt-4 leading-relaxed ">
                Oferecemos mais do que um corte de cabelo ou barba:
                <span className="italic"> Proporcionamos uma experiência de qualidade, conforto e confiança.</span>
              </p>
              <p>
                Com profissionalismo e atenção aos detalhes, os nossos barbeiros garantem um serviço personalizado que supera expectativas.
              </p>
              <p>
                Aqui, cuidas da tua imagem num ambiente onde qualidade e bem-estar se unem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contactus />
    </div>
  );
}

export default App;




