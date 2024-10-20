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
          className={"text-color-secundario hover:text-black text-center font-title-medium-bold-font-family text-title-medium-bold-font-size leading-title-medium-bold-line-height font-title-medium-bold-font-weight h-[100%] flex items-center justify-center " + className}
          style={{
            letterSpacing: "var(--title-medium-bold-letter-spacing, 0.15px)",
          }}
        >
          {nameSection}
        </Link>
    );
  };
  