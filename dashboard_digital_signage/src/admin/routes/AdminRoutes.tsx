import { Navigate, Route, Routes } from "react-router-dom"
import { AdminDashboard } from "../pages"
import { Navbar } from "../components"

export const AdminRoutes = () =>{
  return(
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/admin-dashboard' />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}