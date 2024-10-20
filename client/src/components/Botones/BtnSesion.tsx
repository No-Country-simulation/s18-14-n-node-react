import { MouseEventHandler } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IBtnSesionProps {
    action: MouseEventHandler;
    imgSrc?: string;
}

export const BtnSesion = (props: IBtnSesionProps) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem("tkn");
        navigate('/')
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <button
            onClick={toggleDropdown}
            className="flex items-center min-w-max px-2 gap-3 rounded-lg h-1/2 my-auto focus:outline-none relative bg-colorbeig">
            <img
                src={props.imgSrc}
                className="w-10 h-10 rounded-md"
            />
            <p className="text-colorencabezados"><i className="fa-solid fa-angle-down"></i></p>
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-20 w-48 bg-white rounded-lg shadow-custom z-10">
              <a href="/" onClick={logout} className="block px-4 py-2 rounded-lg text-colorencabezados hover:bg-coloracento">Cerrar sesión</a>
            </div>
          )
        }
        </>
    )
}