import { NavLink } from "react-router-dom"
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export const SoftwareItem = () =>{

  return(
    <NavLink to="/admin/software" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <HiOutlineComputerDesktop className="text-2xl"/>
        Software
      </li>
    </NavLink>
  )
}