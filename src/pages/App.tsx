import Navbar from "../components/navbar";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImScissors } from "react-icons/im";
import { GiBeard } from "react-icons/gi";

function App() {

  const services = [
    { id: 1, icon: <ImScissors size={70} />, text: "Corte Regular", value: "More" },
    { id: 2, icon: <GiBeard  size={70} />, text: "Barba", value: "More" },
    { id: 3, icon: <ImScissors size={70} />, text: "Barba Completa", value: "More" },
    { id: 4, icon: <ImScissors size={70} />, text: "Corte para crianças", value: "More" }
  ];
  
  return (
    <div>
      <Navbar/>

      <div className="ml-14 mt-8 flex">
        {/* Texto e Informações */}
        <div className="w-1/2">
          <p className="text-3xl">Bem-vindo ao</p>
          <p className="text-5xl font-semibold">Elite Barber Shop</p>
          <p className="text-5xl font-semibold">Guimarães</p>

          <div className="flex w-full">
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

              <div className="p-4 mt-2">
                <a
                  href="https://buk.pt/elite-barbershop"
                  className="font-semibold w-30 h-10 shadow-sm rounded-xl border border-black flex items-center justify-center"
                >
                  Marcações
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-1/2">
          <img
            className="rounded-3xl w-125 h-110 shadow-lg"
            src="https://corpoeface.com.br/wp-content/uploads/2023/10/barbeiro-curso-online.jpg"
          />
        </div>
      </div>

      <div className="flex space-x-30 mt-10 ml-30 ">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center justify-center">
            {service.icon}
            <p className="text-lg font-semibold ">{service.text}</p>
            <div className="p-3 mt-2 w-35 text-center rounded-2xl bg-black text-white">{service.value}</div>
         </div>
        ))}
      </div>

      <div className="relative mt-2 min-h-screen bg-[url('https://st2.depositphotos.com/2931363/9695/i/600/depositphotos_96952028-stock-photo-young-handsome-man-in-barbershop.jpg')] bg-cover bg-center">
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Texto acima da imagem escura */}
        <div className="flex px-20 py-40 ">
          <div className="relative h-full w-1/2">
            <p className="text-4xl text-white font-bold">Por que escolher-nos?</p>
            <p className="text-xl text-white font-semibold">Além disso, aqui estão 5 razões pelas quais os homens preferem a Elite Barber Shop Guimarães:</p>
            <ul className="text-white list-disc ml-10 mt-2 space-y-5">
              <li>Ambiente sempre acolhedor e confortável.</li>
              <li>Os nossos profissionais são especialistas e focam-se na máxima qualidade.</li>
              <li>Valorizamos o tempo e o investimento dos nossos clientes.</li>
              <li>Trabalhamos apenas com produtos premium, hipoalergénicos e de alta qualidade.</li>
              <li>Todas as superfícies e ferramentas são limpas e desinfetadas antes e depois de cada utilização.</li>
            </ul>
          </div>

          <div className="w-110 h-120 relative bg-white ml-20 rounded-2xl">
            <p className="text-4xl ">Horários</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App; 




