import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { RecetTarget } from "@/components/commons/RecetTarget";
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-[#EEE]">
      <Navbar />
      <RecetTarget 
        imgSrc="https://dgari.com/wp-content/uploads/2022/02/Flan-de-vainilla-con-caramelo.png"
        recetName="Flan"
        recetText="Uno de los postres más sencillos y rápidos de preparar es este flan sabor vainilla con caramelo quemado.."
      />
      <Outlet />
      <Footer />
    </div>
  )
}
