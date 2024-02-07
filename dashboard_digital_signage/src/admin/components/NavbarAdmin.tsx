import { BlueprintsItem, DashboardItem, DocumentationItem, PricedItem, SoftwareItem, TemplatesItem } from "../../ui"

export const NavbarAdmin = () =>{
  return(
    <nav className="w-[15%] flex flex-col p-2 h-screen justify-between">
      <section className="flex flex-col">
        <div className="flex flex-col items-center">
          <img className="w-1/3" src="/logo.png" alt="Logo de app" />
          <h1 className="text-red-600 font-semibold text-lg">Señalizacion Digital IAMSA</h1>

        </div>
        <ul className="flex flex-col gap-2 mt-16 px-3">
          <DashboardItem />
          <TemplatesItem />
          <BlueprintsItem />
          <PricedItem />
          <SoftwareItem />
          <DocumentationItem />
        </ul>
      </section>



      <span className="w-4/5 text-center py-2 rounded-md bg-gray-200 self-center hover:bg-red-200 hover:text-red-700 cursor-pointer">Logout</span>

    </nav>
  )
}