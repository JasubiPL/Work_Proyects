import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../admin/routes/AdminRoutes"

export const AppRouter = () =>{
  return(
    <Routes>
      <Route path="/*" element={<Navigate to='/admin-dashboard' />} />
      <Route path="/admin-dashboard" element={<AdminRoutes />} />
    </Routes>
  )
}