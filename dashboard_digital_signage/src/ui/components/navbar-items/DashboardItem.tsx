import { NavLink } from "react-router-dom"
import { MdOutlineDashboard } from "react-icons/md";

export const DashboardItem = () =>{

  return(
    <NavLink to="/admin/dashboard" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <MdOutlineDashboard className="text-2xl"/>
        Dashboard
      </li>
    </NavLink>
  )
}