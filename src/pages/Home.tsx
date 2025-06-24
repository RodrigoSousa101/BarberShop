import Navbar from "../components/navbar";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import Contactus from "../components/contactus";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, Users, Shield, Star } from "lucide-react";
import { MapPin, Phone } from "lucide-react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-fade-in-up")
      }, index * 200)
    })

    // Smooth scroll for navigation links
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
    <div className="min-h-screen w-full bg-gradient-to-r from-white to-gray-300 py-3">
      <div className="px-8 lg:px-39">
        <div className="grid grid-cols-1 md:grid-cols-2">
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
            <p className="text-gray-700 text-xl font-regular font-text mt-6 pr-10">Onde a tradição encontra a modernidade. Experiência premium em cuidados masculinos com o toque de elegância que mereces.</p>
          </div>
          <div>Hello</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;




