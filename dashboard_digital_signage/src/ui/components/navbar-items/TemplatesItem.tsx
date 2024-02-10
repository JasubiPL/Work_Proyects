import { NavLink } from "react-router-dom"
import { GoProjectTemplate } from "react-icons/go";

export const TemplatesItem = () =>{

  return(
    <NavLink to="/admin/plantillas" className={({ isActive }) => ` px-2 border-l-4 border-white py-1 hover:border-red-200 hover:text-red-200 ${ isActive ? 'text-red-600 border-red-600' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <GoProjectTemplate className="text-2xl"/>
        Plantillas
      </li>
    </NavLink>
  )
}