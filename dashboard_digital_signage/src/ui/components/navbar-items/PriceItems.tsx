import { NavLink } from "react-router-dom"
import { MdPriceCheck } from "react-icons/md";

export const PricedItem = () =>{

  return(
    <NavLink to="/admin/cotizaciones" className={({ isActive }) => `rounded-md px-2 py-1 hover:bg-gray-200 hover:text-black ${ isActive ? 'text-red-700 bg-red-200' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <MdPriceCheck className="text-2xl"/>
        Cotizaciones
      </li>
    </NavLink>
  )
}