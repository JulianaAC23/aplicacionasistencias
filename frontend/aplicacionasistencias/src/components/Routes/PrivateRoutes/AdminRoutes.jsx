import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../../pages/Admin/Dashboard";

export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    )
}
