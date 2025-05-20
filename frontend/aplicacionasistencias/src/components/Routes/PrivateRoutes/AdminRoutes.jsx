import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../../pages/Admin/Dashboard";
import Asistencias from "../../pages/Admin/Asistencias";

 
export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="asistencias" element={<Asistencias />} />
        </Routes>
    )
}
