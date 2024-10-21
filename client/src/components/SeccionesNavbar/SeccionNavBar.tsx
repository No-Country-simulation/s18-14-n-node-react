import { Link } from "react-router-dom";

export interface ISeccionesNavbarProps {
    className?: string;
    nameSection?: string;
    linkTo: string;
  }
  
  export const SeccionNavBar = ({
    className,
    nameSection,
    linkTo,
  }: ISeccionesNavbarProps): JSX.Element => {
  
    return (  
        <Link
          to={linkTo}
          className={"text-colorsecundario hover:text-black text-center h-[100%] flex items-center justify-center " + className}
        >
          {nameSection}
        </Link>
    );
  };
  