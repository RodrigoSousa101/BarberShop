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

          <div className="w-full">
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
            className="rounded-3xl w-150 h-110 shadow-lg object-top object-cover"
            src="../assets/images/barbermain.png"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-40 mt-10">
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
            <ul className="text-white text-lg list-disc ml-5 mt-2 space-y-5">
              <li>Ambiente sempre acolhedor e confortável.</li>
              <li>Os nossos profissionais são especialistas e focam-se na máxima qualidade.</li>
              <li>Valorizamos o tempo e o investimento dos nossos clientes.</li>
              <li>Trabalhamos apenas com produtos premium, hipoalergénicos e de alta qualidade.</li>
              <li>Todas as superfícies e ferramentas são limpas e desinfetadas antes e depois de cada utilização.</li>
            </ul>
          </div>

          <div className="w-110 h-130 relative bg-white ml-20 rounded-2xl flex flex-col items-center">
            <p className="text-[#B5AF93] text-4xl font-bold p-10">Horários</p>
            <ul className="space-y-2 font-serif">
              <li className="text-2xl"> Segunda: 09:00 - 20:00</li>
              <li className="text-2xl"> Terça: 09:00 - 20:00</li>
              <li className="text-2xl"> Quarta: 09:00 - 20:00</li>
              <li className="text-2xl"> Quinta: 09:00 - 20:00</li>
              <li className="text-2xl"> Sexta: 09:00 - 20:00</li>
              <li className="text-2xl"> Sabado: 09:00 - 19:00</li>
              <li className="text-2xl"> Domingo: Fechado</li>
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
      <div className="relative min-h-screen bg-[url('https://coreldrawdesign.com/resources/previews/preview-old-black-background.-grunge-texture.-dark-wallpaper.-blackboard,-chalkboard,-room-wall.-free-photo-1638192854.webp')] bg-cover bg-center flex ">
        {/* Contêiner da Imagem */}
          <div className="relative pt-20 pl-60">
              <img className="h-120 w-120 rounded-full object-cover" src="https://images.fresha.com/lead-images/placeholders/barbershop-11.jpg?class=venue-gallery-large&dpr=2" />
              
              {/* Caixa sobre a Imagem */}
              <div className="absolute p-8 top-2/5 left-3/4 bg-gray-300 w-130 h-90 rounded-4xl shadow-lg flex flex-col items-center">
                <p className="text-4xl font-bold">Elite Barber Shop</p>
                <p className="mt-4">Oferecemos mais do que um corte de cabelo ou barba: proporcionamos uma experiência de qualidade, conforto e confiança.
                  <p>Com profissionalismo e atenção aos detalhes, os nossos barbeiros garantem um serviço personalizado que supera expectativas.</p>  
                  Aqui, cuidas da tua imagem num ambiente onde qualidade e bem-estar se unem. </p>
              </div>
          </div>
      </div>



    </div>
  );
}

export default App; 




