import { NavLink } from "react-router-dom"
import { LiaSitemapSolid } from "react-icons/lia";

export const BlueprintsItem = () =>{

  return(
    <NavLink to="/admin/planos" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <LiaSitemapSolid className="text-2xl"/>
        Planos
      </li>
    </NavLink>
  )
}