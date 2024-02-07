import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../admin/routes/AdminRoutes"

export const AppRouter = () =>{
  return(
    <Routes>
      <Route path="/*" element={<Navigate to='err404' />} />
      <Route path="/" element={<Navigate to='admin' />} />
      <Route path="admin/*" element={<AdminRoutes />} />
    </Routes>
  )
}