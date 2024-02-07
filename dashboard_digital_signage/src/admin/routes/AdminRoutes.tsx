import { Navigate, Route, Routes } from "react-router-dom"
import { AdminDashboard } from "../pages"
import { NavbarAdmin } from "../components"

export const AdminRoutes = () =>{
  return(
    <div className="flex h-screen">
      <NavbarAdmin />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}