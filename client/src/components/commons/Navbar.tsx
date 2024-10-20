
import { SeccionNavBar } from "../SeccionesNavbar/SeccionNavBar";
import { BotonSecondary } from "../Botones/BotonSecondary";
import { BotonPrimary } from "../Botones/BotonPrimary";
import { logoWText } from "@/assets";
import { Link, useNavigate } from "react-router-dom";
import { BtnSesion } from "../Botones/BtnSesion";


export default function Navbar() {
  return (
    <div className="flex min-w-full border-b">
      <NavBarWeb />
    </div>
  )
}

export interface INavBarWebProps {
  className?: string;
}

export const NavBarWeb = ({
  className,
}: INavBarWebProps): JSX.Element => {

  const navigate = useNavigate();
  const tkn = localStorage.getItem("tkn");

  return (
    <div
      className={
        "bg-colorprimario px-24 flex flex-grow h-[100px] w-screen" +
        className
      }
    >

      <div className="bg-colorprimario w-1/3 h-full flex items-center justify-center">
        <Link className="flex h-4/5 w-full" to="/"><img src={logoWText} className="h-auto w-full" /></Link>
      </div>

      <div className="flex flex-row w-3/4 items-center justify-evenly">
        <SeccionNavBar className="!shrink-0" linkTo="/recipes/categories" nameSection="CATEGORIAS"></SeccionNavBar>
        <SeccionNavBar className="!shrink-0" linkTo="/recipes/personalized" nameSection="RECETA PERSONALIZADA"></SeccionNavBar>
      </div>

      {!tkn?
        <div className="flex flex-row gap-3 items-center w-1/3 justify-end">
          <BotonSecondary
            className="!shrink-0 border-2 border-colorsecundario hover:bg-coloracento"
            btnText="Registrarse"
            action={() => navigate('/register')}
          ></BotonSecondary>
          <BotonPrimary
            className="bg-colorprimario !shrink-0 hover:bg-coloracento shadow-custom"
            textBtn="Iniciar sesión"
            action={() => navigate('/login')}
          />
        </div>
        :
        <div className="flex flex-row gap-3 items-center w-1/3 justify-end">
        <BtnSesion 
          imgSrc="https://via.placeholder.com/40" 
          action={()=>navigate('/navigation/Profile')}
        />
        </div>
      }
    </div>
  );
};
