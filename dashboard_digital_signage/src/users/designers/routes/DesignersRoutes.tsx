import { Navigate, Route, Routes } from "react-router-dom"
import { BlueprintsPage, TemplatesPage } from "../../../pages"
import { NavbarDesigners } from "../components"
import { Header } from "../../../ui"

export const DesignersRoutes = () =>{
  return(
    <div className="flex h-screen">
      <NavbarDesigners />

      <section className="flex flex-col w-[85%] h-full bg-gray-100">
        <Header />
        <Routes>
          <Route path="/*" element={<Navigate to="plantillas" />} />
          <Route path="/plantillas" element={<TemplatesPage />} />
          <Route path="/planos" element={<BlueprintsPage />} />
        </Routes>
      </section>
    </div>
  )
}