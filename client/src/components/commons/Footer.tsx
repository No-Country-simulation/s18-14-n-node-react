import { logo } from "@/assets";
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
    <footer className="bg-head_text w-full py-7 lg:py-1.5 ps-[30px] pe-[60px] lg:px-[104px] flex">
      <img src={logo} alt="logo" className="w-[130px] h-[130px] lg:w-[180px] lg:h-[180px]" />
      <div className="grow py-0 lg:py-5 ms-4 lg:ms-7 flex flex-col justify-between">
        <nav className="">
          <ul className="flex justify-end gap-7 text-white">
            {footerItems.map(({to, label}, index) => 
              <FooterItem key={index} to={to} label={label} />
            )}
          </ul>
        </nav>
        <div className="border-t-2 border-white flex justify-end text-white text-sm lg:text-base pt-3">
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
    <li className="text-sm lg:text-base">
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
}
