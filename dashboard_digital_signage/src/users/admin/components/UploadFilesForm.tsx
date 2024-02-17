import { IoCloseSharp } from "react-icons/io5";
import { UploadContext } from "../../../context/UploadFilesContext";
import { useContext } from "react";

export const UploadFilesForm = () =>{

  const { setForm } = useContext(UploadContext)

  return(
    <form className="absolute top-[20%] left-[40%] w-96 bg-white shadow-xl p-4 grid gap-4 pop-in">
      <div className="flex w-full justify-between items-center border-b-2 border-gray-100">
        <span>Datos del Archivo</span>
        <IoCloseSharp className=" cursor-pointer" onClick={() =>setForm(false)}/>
      </div>
      <input
      className="w-full border-b-2 border-red-600 outline-none" 
        type="text"  
        placeholder="Nombre del archivo"
      />
      <div className="w-full grid">
        <label className="text-sm text-red-600" htmlFor="categories">Selecciona la categoria</label>
        <select className=" outline-red-300 border-gray-200 border-2" id="categories">
          <option value="blueprints">Planos</option>
          <option value="templates">Plantillas</option>
          <option value="price">Cotizaciones</option>
        </select>
      </div>
      <input className="block w-full text-sm border cursor-pointer text-gray-400 focus:outline-none bg-gray-50 border-gray-60 placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
      <button className="bg-red-600 py-1 px-2 text-white hover:bg-red-400 active:scale-95 transition-all">Subir</button>
    </form>
  )
}