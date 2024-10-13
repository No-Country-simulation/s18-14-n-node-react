
import { SeccionNavBar } from "../SeccionesNavbar/SeccionNavBar";
import { BotonSecondary } from "../Botones/BotonSecondary";
import { BotonPrimary } from "../Botones/BotonPrimary";
import { media } from "@/assets";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="flex gap-5 border-b">
      <NavBarWeb />
      {/* <ModeToggle />*/}
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

  return (
    <div
      className={
        "bg-[#c5c5c5] px-20 flex flex-row gap-6 items-center justify-start h-[100px] w-screen relative" +
        className
      }
    >
      <div className="shrink-0 w-[280px] h-[95px] static">
        <div className="bg-[#d9d9d9] w-[280px] h-[95px] absolute left-20 top-[2.5px] flex items-center justify-center">
        <Link className="max-h-20 flex flex-center" to="/"><img src={media} className="max-h-20 mx-auto"/></Link>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center justify-start flex-1 relative">
        <SeccionNavBar className="!shrink-0" linkTo="#" nameSection="CATEGORIAS"></SeccionNavBar>
        <SeccionNavBar className="!shrink-0" linkTo="#" nameSection="RECETA PERSONALIZADA"></SeccionNavBar>
      </div>
      <div className="flex flex-row gap-3 items-center w-[390px] relative">
        <BotonSecondary
          className="!shrink-0"
          btnText="Registrarse"
          action={()=>navigate('/register')}
        ></BotonSecondary>
        <BotonPrimary
          className="!bg-[#9e9696] !shrink-0"
          textBtn="Iniciar sesión"
          action={()=>navigate('/login')}
        />
      </div>
    </div>
  );
};
