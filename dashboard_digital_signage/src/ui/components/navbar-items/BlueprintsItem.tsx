import { NavLink } from "react-router-dom"
import { LiaSitemapSolid } from "react-icons/lia";

export const BlueprintsItem = () =>{

  return(
    <NavLink to="/admin/planos" className={({ isActive }) => ` px-4 border-l-4 border-white py-1 hover:border-red-200 hover:text-red-200 ${ isActive ? 'text-red-600 border-red-600' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <LiaSitemapSolid className="text-2xl"/>
        Planos
      </li>
    </NavLink>
  )
}