import { Navigate, Route, Routes } from "react-router-dom"
import { BlueprintsPage, DocumentationPage, PricePage, TemplatesPage } from "../../../pages"
import { NavbarManager } from "../components"
import { Header } from "../../../ui"

export const ManagerRoutes = () =>{
  return(
    <div className="flex h-screen">
      <NavbarManager />

      <section className="flex flex-col w-[85%] h-full bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="plantillas" />} />
          <Route path="/plantillas" element={<TemplatesPage />} />
          <Route path="/planos" element={<BlueprintsPage />} />
          <Route path="/cotizaciones" element={<PricePage />} />
          <Route path="/documentacion" element={<DocumentationPage />} />
        </Routes>
      </section>
    </div>
  )
}