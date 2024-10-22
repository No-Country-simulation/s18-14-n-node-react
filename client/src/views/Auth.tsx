import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-fondoAuth bg-cover gap-3 bg-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
