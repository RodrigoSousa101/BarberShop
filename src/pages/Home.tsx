import Navbar from "../components/navbar";
import { useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-fade-in-up")
      }, index * 200)
    })

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href")?.substring(1)
        const targetElement = document.getElementById(targetId || "")
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      })
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-r from-white to-gray-300 py-3 pt-18">
        <div className="px-4 sm:px-8 lg:px-39">
          <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 gap-15">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-600 to-yellow-800"></div>
                <span className="text-gray-600 text-sm font-medium font-header">EXPERIÊNCIA ÚNICA</span>
              </div>
              <div className="text-8xl font-extrabold font-header mt-2">
                <div>Elite</div>
                <div className="text-yellow-600">Barber</div>
                <div>Shop</div>
              </div>
              <p className="text-gray-600 text-2xl mt-4 ">Guimarães</p>
              <p className="text-gray-700 text-xl font-regular font-text mt-6 pr-10">
                Onde a tradição encontra a modernidade. Experiência premium em cuidados masculinos com o toque de elegância que mereces.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-6 ">
                <div className="w-full h-20 flex items-center bg-white shadow-lg rounded-xl hover:border border-yellow-700 p-4 ">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <FiMapPin size={20} className="text-white"/>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold">Localização</p>
                    <p className="font-text text-sm text-gray-600">
                      Centro Comercial Villa, Av. Dom João IV 1027,Guimarães
                    </p>
                  </div>
                </div>
                <div className="w-full h-20 flex items-center bg-white shadow-lg rounded-xl hover:border border-yellow-700 p-4 ">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <FiMapPin size={20} className="text-white"/>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold">Contancto</p>
                    <p className="font-text text-sm text-gray-600">
                      (351) 939 022 312</p>
                  </ div>
                </div>
              </div>
            </div>
            <div className="w-full h-140 md:h-180 bg-[url('/assets/images/barber_shop_logo.jpeg')] bg-cover bg-center border-4 border-white shadow-xl rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




