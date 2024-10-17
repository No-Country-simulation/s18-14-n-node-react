import { Logo } from "@/assets";
import { Link } from "react-router-dom";


interface IFooterItems {
  to: string;
  label: string;
}

const footerItems: IFooterItems[] = [
  { to: "/", label: "INICIO" },
  { to: "/recipes/categories", label: "CATEGORÍAS" },
  { to: "/recipes/personalized", label: "RECETA PERSONALIZADA" },
  { to: "/contacto", label: "CONTACTO" },
];


export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] w-full py-[5px] px-[105px] flex">
      <img src={Logo} alt="logo" width={180} height={180} />
      <div className="grow py-5 ms-7 flex flex-col justify-between">
        <nav className="">
          <ul className="flex justify-end gap-7 text-white">
            {footerItems.map(({to, label}, index) => 
              <FooterItem key={index} to={to} label={label} />
            )}
          </ul>
        </nav>
        <div className="border-t-2 border-white flex justify-end text-white">
          <p>
            © 2024 Retrueque - Todos los derechos reservados / Lorem ipsum - Lorem ipsum - Lorem ipsum
          </p>
        </div>
      </div>
    </footer>
  )
}


interface IFooterProps {
  to: string;
  label: string;
}


function FooterItem({ to, label }: IFooterProps) {
  return (
    <li>
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
}
