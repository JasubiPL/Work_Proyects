import { NavLink } from "react-router-dom"
import { MdPriceCheck } from "react-icons/md";
import { FC } from "react";

interface Props {
  path: string,
}

export const PricedItem:FC<Props>  = ({ path }) =>{

  return(
    <NavLink to={`/${ path }/cotizaciones`} className={({ isActive }) => ` px-2 border-l-4 border-white py-1 hover:border-red-200 hover:text-red-200 ${ isActive ? 'text-red-600 border-red-600' : '' }`}>
      <li className="flex items-center gap-2 text-lg">
        <MdPriceCheck className="text-2xl"/>
        Cotizaciones
      </li>
    </NavLink>
  )
}