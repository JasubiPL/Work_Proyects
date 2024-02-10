import { Navigate, Route, Routes } from "react-router-dom"
import { AdminRoutes } from "../users/admin/routes/AdminRoutes"
import { ManagerRoutes } from "../users/manager/routes/ManagerRutes"
import { DesignersRoutes } from "../users/designers/routes/DesignersRoutes"

export const AppRouter = () =>{
  return(
    <Routes>
      <Route path="/*" element={<Navigate to='err404' />} />
      <Route path="/" element={<Navigate to='admin' />} />
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="manager/*" element={<ManagerRoutes />} />
      <Route path="designers/*" element={<DesignersRoutes />} />
    </Routes>
  )
}