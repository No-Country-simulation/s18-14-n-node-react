import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { SideMenu } from "@/components/commons/SideMenu";
import { Outlet } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="h-screen max-h-fit flex flex-col bg-[#EEE]">
            <Navbar />

            <div className="flex flex-row flex-grow overflow-hidden">
                <div className="w-1/5">
                    <SideMenu />
                </div>
                <div className="flex-grow overflow-auto">
                    <Outlet />
                    <div className="absolute top-full left-0 w-full bg-white z-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}