import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between">
      <Navbar />
      <div className="flex">
        <span className='text-primary border-2 rounded-md p-56'>imagen container</span>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
