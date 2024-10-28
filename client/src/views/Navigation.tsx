import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { SideMenu } from "@/components/commons/SideMenu";
import { useState } from "react";
import { Outlet } from 'react-router-dom'

export default function Navigation() {

    const [open,setOpen] = useState(true);

    return (
        <div className="lg:h-screen h-full max-h-fit md:flex md:flex-col bg-[#EEE]">
            <Navbar />

            <div className="flex flex-row flex-grow overflow-hidden">
                <div className= {`${open? 'block':'-left-52' } z-10 lg:z-auto h-full lg:h-screen absolute lg:static`}>
                    <SideMenu
                    icon={open? "fa-solid fa-circle-chevron-right " : "fa-solid fa-circle-chevron-left "}
                    action={()=>setOpen(!open)}
                    />
                </div>
                <div className="flex-grow overflow-auto bg-colorblancoprincipal">
                    <Outlet 
                    />
                    <div className="lg:absolute relative lg:top-full top-64  left-0 w-full bg-white z-20">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}