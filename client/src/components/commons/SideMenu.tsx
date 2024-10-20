
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';


interface MenuItem {
  title: string;
  subTitle?: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: 'Datos personales', href: '/navigation/Profile'},
  { title: 'Mis recetas', href: '/navigation/Receps'},
  { title: 'Recetas guardadas', href: '/navigation/RecepsSaved' }
];




export const SideMenu = () => {

  return (
    <div id="menu" className="bg-colorbeig min-h-screen flex-col flex-grow z-10 w-60 py-10 left-0">
      

      {/* Menu Items */ }
      <nav id="nav" className="w-full">

        {
          menuItems.map( item =>(
            <SideMenuItem key={item.href} {...item} />
          ) )
        }

        <NavLink to={'/login'}>
          <div className="flex flex-col mt-3 border-t-2  pt-5 w-10/12 mx-auto">
            <span className="text-lg text-colortextosubtitulos font-bold leading-5" onClick={()=>localStorage.clear()}>Cerrar sesión</span>
          </div>
        </NavLink>

      </nav>
    </div>
  );
};