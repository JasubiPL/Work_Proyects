import axios from "axios"
import { useEffect } from "react"

export const TemplatesPage= () =>{

  const getFiles = async () =>{
    const res = await axios.get("http://localhost:7000/api/search-templates?company=IAMSA")
    const data  = await res.data
    
    console.log(data)
  }

  useEffect(() =>{
    getFiles()
},[])



  return(
    <section className="w-full  h-full flex flex-col items-center">
      <section className="w-[90%] py-4 bg-white mt-8 border-b-[1px] border-gray-200">
        <header className="text-center grid grid-cols-4 font-semibold border-b-[1px] border-gray-200 pb-1">
          <article>Nombre ▾</article>
          <article>Modificacion ▾</article>
          <article>Tamaño del Archivo ▾</article>
          <article>Descargar ▾</article>
        </header>
      </section>
    </section>
  )
}