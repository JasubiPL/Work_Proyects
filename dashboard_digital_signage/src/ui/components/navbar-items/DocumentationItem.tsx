import { NavLink } from "react-router-dom"
import { GrBook } from "react-icons/gr";

export const DocumentationItem = () =>{

  return(
    <NavLink to="/admin/documentacion" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <GrBook className="text-2xl"/>
        Documentación
      </li>
    </NavLink>
  )
}