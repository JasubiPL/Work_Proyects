import { IoCloseSharp } from "react-icons/io5";
import { UploadContext } from "../../../context/UploadFilesContext";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import axios from "axios";

export const UploadFilesForm = () =>{

  const { setForm } = useContext(UploadContext)
  const [fileData, setFileData] = useState({
    fileName:"",
    categories: "blueprints",
    document:  null as File | null,
  })


  const handlerForm = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    setFileData({
      ...fileData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileData({
      ...fileData,
      document: e.target.files?.[0] || null // Almacenamos el archivo en fileData
    });
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fileName", fileData.fileName);
    formData.append("category", fileData.categories);
    if (fileData.document) {
      formData.append("document", fileData.document);
    }

    try {
      const response = await axios.post("http://localhost:7000/api/save-blueprints", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  console.log(fileData)

  return(
    <form
    onSubmit={(e) => sendForm(e)} 
    className="absolute top-[20%] left-[40%] w-96 bg-white shadow-xl p-4 grid gap-4 pop-in">
      <div className="flex w-full justify-between items-center border-b-2 border-gray-100">
        <span>Datos del Archivo</span>
        <IoCloseSharp className=" cursor-pointer" onClick={() =>setForm(false)}/>
      </div>
      <input
        className="w-full border-b-2 border-red-600 outline-none" 
        type="text"  
        placeholder="Nombre del archivo"
        name="fileName"
        onChange={handlerForm}
      />
      <div className="w-full grid">
        <label className="text-sm text-red-600" htmlFor="categories">Selecciona la categoria</label>
        <select 
          onChange={handlerForm}
          className=" outline-red-300 border-gray-200 border-2" name="categories">
          <option value="blueprints">Planos</option>
          <option value="templates">Plantillas</option>
          <option value="price">Cotizaciones</option>
        </select>
      </div>
      <input
        name="document" 
        onChange={handleFileChange}
        className="block w-full text-sm border cursor-pointer text-gray-400 focus:outline-none bg-gray-50 border-gray-60 placeholder-gray-400" 
        aria-describedby="carga_de_archivos" 
        id="documentation" 
        type="file" />
      <button className="bg-red-600 py-1 px-2 text-white hover:bg-red-400 active:scale-95 transition-all">Subir</button>
    </form>
  )
}