import { NavLink } from "react-router-dom"
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const SoftwareItem = () =>{

  return(
    <NavLink to="/admin/software" className={({ isActive }) => ` px-2 border-l-4 border-white py-1 hover:border-red-200 hover:text-red-200 ${ isActive ? 'text-red-600 border-red-600' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <HiOutlineComputerDesktop className="text-2xl"/>
        Software
      </li>
    </NavLink>
  )
}