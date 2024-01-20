import CalendarIcon from "../icons/CalendarIcon"
import MarkerIcon from "../icons/MarkerIcon"

export default function Search({inputSelected}){
  if(inputSelected === 'first'){
    return(
      <form action="" className=" mt-3 grid px-5 lg:px-0 gap-4 lg:gap-0 lg:grid-cols-6 rounded overflow-hidden">
        <div className="bg-white flex items-center gap-2 font-sans py-1 rounded  lg:rounded-none lg:col-span-2 px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Origen" className="py-2 text-lg  lg:border-r-2 w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 font-sans py-1 rounded  lg:rounded-none lg:col-span-2 border-r-2 px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Destino" className="py-2 text-lg w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 font-sans py-1 rounded  lg:rounded-none  lg:col-span-1 px-2">
          <CalendarIcon width='25' height='25'/>
          <input type="text" placeholder="Salida" className="py-2 text-lg w-full"/>
        </div>
        <button className=" transition relative h-20 rounded lg:rounded-none lg:h-auto lg:col-span-1 bg-etn-secundary text-white lg:after:content-['❯'] after:absolute after:top-1/3 
        hover:after:left-2/3 after:text-white after:translate-x-24 hover:after:translate-x-4 after:transition-all">
          Buscar
        </button>
      </form>
    )
  }
  else if(inputSelected === 'second'){
    return(
      <form action="" className=" mt-3 grid grid-cols-6 px-5 lg:px-0 lg:grid-cols-7 rounded overflow-hidden">
        <div className="bg-white flex items-center gap-2 mb-3 lg:mb-0 rounded lg:rounded-none font-sans py-1 col-span-6 lg:col-span-2 px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Origen" className="py-2 text-lg lg:border-r-2 w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 mb-3 lg:mb-0 rounded lg:rounded-none font-sans py-1 col-span-6 lg:col-span-2 border-r-2 px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Destino" className="py-2 text-lg w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 mb-3 lg:mb-0 rounded-l lg:rounded-none font-sans py-1 col-span-3 lg:col-span-1 px-2">
          <CalendarIcon width='25' height='25'/>
          <input type="text" placeholder="Salida" className="py-2 text-lg lg:border-r-2 w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 mb-3 lg:mb-0 rounded-r lg:rounded-none font-sans py-1 col-span-3 lg:col-span-1  px-2">
          <CalendarIcon width='25' height='25'/>
          <input type="text" placeholder="Regreso" className="py-2 text-lg w-full"/>
        </div>
        <button className=" transition relative rounded col-span-6 h-20 lg:rounded-none lg:h-auto lg:col-span-1 bg-etn-secundary text-white lg:after:content-['❯'] after:absolute after:top-1/3 
        hover:after:left-2/3 after:text-white after:translate-x-20 hover:after:translate-x-4 after:transition-all">
          Buscar
        </button>
      </form>
    )
  }
  else if(inputSelected === 'third'){
    return(
      <form action="" className=" mt-3 grid px-5 gap-4 lg:gap-0 lg:px-0 lg:grid-cols-7 rounded overflow-hidden">
        <div className="bg-white flex items-center gap-2 font-sans py-1 rounded lg:rounded-none lg:col-span-3 px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Origen" className="py-2 text-lg lg:border-r-2 w-full"/>
        </div>
        <div className="bg-white flex items-center gap-2 font-sans py-1 rounded lg:rounded-none lg:col-span-3  px-2">
          <MarkerIcon width='25' height='25'/>
          <input type="text" placeholder="Destino" className="py-2 text-lg w-full"/>
        </div>
        <button className=" transition relative lg:col-span-1 bg-etn-secundary rounded  h-20 lg:rounded-none lg:h-auto text-white lg:after:content-['❯'] after:absolute after:top-1/3 
         hover:after:left-2/3 after:text-white after:translate-x-20 hover:after:translate-x-4 after:transition-all">
          Buscar
        </button>
      </form>
    )
  }
}