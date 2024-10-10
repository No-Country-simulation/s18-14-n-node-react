import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { SideMenu } from "@/components/commons/SideMenu";
import { Outlet } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="h-screen flex flex-col bg-[#EEE]">
            <Navbar />

            <div className="flex flex-row flex-grow overflow-auto">
                <div className="w-80">
                    <SideMenu />
                </div>
                <div className="flex-grow overflow-auto">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    )
}