import axios from "axios"
import { RiFileDownloadLine } from "react-icons/ri";
import { useEffect, useState } from "react"
import { FileType } from "../ui/components/FileType";


interface Doc {
  name: string,
  filePath: string,
  extension: string,
  modifiedDate: string,
  size: string
}

export const TemplatesPage= () =>{
  const [files, setFiles] = useState<Doc[]>([])
 
  

  const getFiles = async () =>{
    const res = await axios.get("http://localhost:7000/api/search-templates?company=IAMSA")
    const data  = await res.data
    
    console.log(data)
    setFiles(data)
    
  }

  useEffect(() =>{
    getFiles()
},[])



  return(
    <section className="w-full  h-full flex flex-col items-center overflow-y-auto mb-8">
      <section className="w-[90%] py-4 bg-white mt-8 border-b-[1px] border-gray-200">
        <header className="text-center grid grid-cols-files font-semibold border-b-[1px] border-gray-200 pb-1">
          <article>Nombre ▾</article>
          <article>Modificacion ▾</article>
          <article>Tamaño del Archivo ▾</article>
          <article>Descargar ▾</article>
        </header>
        {
          files.map(file =>(
            <div key={file.name} className="text-center grid grid-cols-files border-b-[1px] border-gray-200 pb-1">
              <div className="text-sm text-center py-3 flex items-center gap-3 px-2">
                <FileType extension={file.extension} />
                {file.name}
              </div>
              <div className="text-sm text-center py-3 flex justify-center items-center">{file.modifiedDate}</div>
              <div className="text-sm text-center py-3 flex justify-center items-center">{file.size}</div>
              <a href={file.filePath} target="__blanck" className="text-2xl flex justify-center items-center text-green-500">
              <RiFileDownloadLine />
              </a>
            </div>
          ))
        }
      </section>
    </section>
  )
}