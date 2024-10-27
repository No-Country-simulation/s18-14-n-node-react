import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { SideMenu } from "@/components/commons/SideMenu";
import { Outlet } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="lg:h-screen h-full max-h-fit md:flex md:flex-col bg-[#EEE]">
            <Navbar />

            <div className="flex flex-row flex-grow overflow-hidden">
                <div className="w-auto hidden md:block">
                    <SideMenu />
                </div>
                <div className="flex-grow overflow-auto bg-colorblancoprincipal">
                    <Outlet 
                    />
                    <div className="md:absolute relative md:top-full top-64  left-0 w-full bg-white z-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}