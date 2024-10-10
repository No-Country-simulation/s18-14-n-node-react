
import { SeccionNavBar } from "../SeccionesNavbar/SeccionNavBar";
import { BotonSecondary } from "../Botones/BotonSecondary";
import { BotonPrimary } from "../Botones/BotonPrimary";


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
  return (
    <div
      className={
        "bg-[#c5c5c5] pr-[104px] pl-[104px] flex flex-row gap-6 items-center justify-start h-[100px] w-screen relative " +
        className
      }
    >
      <div className="shrink-0 w-[291px] h-[95px] static">
        <div className="bg-[#d9d9d9] w-[291px] h-[95px] absolute left-[104px] top-[2.5px]"></div>
        <SeccionNavBar className="!absolute !left-[158px] !top-[29.5px]" nameSection="LOGO"></SeccionNavBar>
      </div>
      <div className="flex flex-row gap-6 items-center justify-start flex-1 relative">
        <SeccionNavBar className="!shrink-0" nameSection="LOREM IPSUM"></SeccionNavBar>
        <SeccionNavBar className="!shrink-0" nameSection="LOREM IPSUM"></SeccionNavBar>
      </div>
      <div className="flex flex-row gap-6 items-center justify-end shrink-0 w-[394px] relative">
        <BotonSecondary
          className="!shrink-0"
          btnText="Registrarse"
        ></BotonSecondary>
        <BotonPrimary 
          className="!bg-[#9e9696] !shrink-0"
          textBtn="Iniciar sesión"
        />
      </div>
    </div>
  );
};
