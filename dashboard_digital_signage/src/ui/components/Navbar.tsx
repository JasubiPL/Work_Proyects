import { FC, ReactElement } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  children: ReactElement
}


export const Navbar:FC<Props> = ({ children }) =>{
  const redirect = useNavigate()

  const handlerLogout = () =>{

    sessionStorage.removeItem("login")
    redirect("/login")
  }

  return(
    <nav className="w-[15%] flex flex-col h-screen justify-between border-r-[1px] border-gray-300">
      <section className="flex flex-col ">
        <div className="flex justify-center items-center gap-2">
          <img className="w-1/6" src="/logo.png" alt="Logo de app" />
          <h1 className=" font-semibold text-sm">Señalizacion Digital IAMSA</h1>

        </div>
        { children }
      </section>



      <button 
        onClick={handlerLogout}
        className="w-4/5 text-center py-2 mb-6 rounded-md bg-gray-200 self-center hover:bg-red-200 hover:text-red-700 cursor-pointer">
        Logout
      </button>

    </nav>
  )
}