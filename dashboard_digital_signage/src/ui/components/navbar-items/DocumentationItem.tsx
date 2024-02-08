import { NavLink } from "react-router-dom"
import { GrBook } from "react-icons/gr";

export const DocumentationItem = () =>{

  return(
    <NavLink to="/admin/documentacion" className={({ isActive }) => ` px-2 border-l-4 border-white py-1 hover:border-red-200 hover:text-red-200 ${ isActive ? 'text-red-600 border-red-600' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <GrBook className="text-2xl"/>
        Documentación
      </li>
    </NavLink>
  )
}