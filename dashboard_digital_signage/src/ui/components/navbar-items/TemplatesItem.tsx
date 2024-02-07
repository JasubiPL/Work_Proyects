import { NavLink } from "react-router-dom"
import { GoProjectTemplate } from "react-icons/go";

export const TemplatesItem = () =>{

  return(
    <NavLink to="/admin/plantilla" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <GoProjectTemplate className="text-2xl"/>
        Plantillas
      </li>
    </NavLink>
  )
}