import { Navigate, Route, Routes } from "react-router-dom"
import { AdminDashboard } from "../pages"
import { NavbarAdmin } from "../components"
import { Header } from "../../ui"

export const AdminRoutes = () =>{
  return(
    <div className="flex h-screen">
      <NavbarAdmin />

      <section className="flex flex-col w-[85%] h-full bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </section>
    </div>
  )
}