import { Routes,Route, Navigate} from "react-router-dom"
import { Home } from "../../pages/Home/Home";
import { Menu } from "../../common/Menu/Menu";
import { Login } from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import Contacto from "../../pages/Contacto/Contacto";
import Nosotros from "../../pages/Nosotros/Nosotros"; 
import NotFound from "../../common/NotFound/NotFound";
import Asistencias from "../../pages/Admin/Asistencias";
import Esudiantes from "../../pages/Admin/Estudiantes";
import { Dashboard } from "../../pages/Admin/Dashboard";
import RutasPublicas from "./RutasPublicas";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import RoleRoutes from "../RoleRoutes/RoleRoutes";
import { AuthProvider } from "../../../context/AuthProvider";

export default function Rutas() {
  return (
    <>
    <AuthProvider>
    <Menu></Menu>
      <Routes>
        <Route element={<RutasPublicas />}>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Register />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
        </Route>

        {/* Rutas Privadas */}
        <Route element={<AdminRoutes />}> 
          <Route element={<RoleRoutes allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={ <Dashboard />} />
          </Route>
        </Route>
        <Route element={<AdminRoutes />}> 
          <Route element={<RoleRoutes allowedRoles={["profesor"]} />}>
            <Route path="/admin/asistencias" element={ <Asistencias />} />
          </Route>
        </Route>
        <Route element={<AdminRoutes />}> 
          <Route element={<RoleRoutes allowedRoles={["estudiante"]} />}>
            <Route path="/admin/estudiante" element={ <Esudiantes />} />
          </Route>
        </Route>
        
        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </AuthProvider>
    </>
  )
}
