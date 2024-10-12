
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';


interface MenuItem {
  title: string;
  subTitle?: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: 'Datos personales', href: '/Profile'},
  { title: 'Mis recetas', href: '/Receps'},
  { title: 'Recetas guardadas', href: '/RecepsSaved' },
  { title: 'Configuracion', href: '/Configuration'},
];




export const SideMenu = () => {

  return (
    <div id="menu" className="bg-white min-h-screen flex-col flex-grow z-10 w-60 py-10 left-0">
      

      {/* Menu Items */ }
      <nav id="nav" className="w-full">

        {
          menuItems.map( item =>(
            <SideMenuItem key={item.href} {...item} />
          ) )
        }

        {/* Logout */}
        <NavLink to={'/login'}>
          <div className="flex flex-col mt-3 border-t pt-5 mx-6">
            <span className="text-lg text-[#637381] font-bold leading-5">Cerrar sesión</span>
          </div>
        </NavLink>

      </nav>
    </div>
  );
};