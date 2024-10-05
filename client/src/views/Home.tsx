import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
