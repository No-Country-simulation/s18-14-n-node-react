import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-[#9e9696] w-full py-6 px-28">
      <nav className="mb-20">
        <ul className="flex justify-end gap-7">
          <FooterItem>LOREM</FooterItem>
          <FooterItem>LOREM</FooterItem>
          <FooterItem>LOREM</FooterItem>
        </ul>
      </nav>
      <div className="border-t-2 border-white flex justify-end">
        <span className="">
          © 2024 Retrueque - Todos los derechos reservados<span> / </span>
        </span>
        <ul className="inline-flex justify-end">
          <li>Lorem ipsum - </li>
          <li>Lorem ipsum - </li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </footer>
  )
}


interface IFooterProps {
  children: React.ReactNode
}


function FooterItem({ children }: IFooterProps) {
  return (
    <li className="px-4 cursor-pointer">
      <Link to="#">
        {children}
      </Link>
    </li>
  );
}
