import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../../context/AuthProvider";
import LoadingSpinner from "../../common/Loading/loadingSpinner";

export default function RutasPublicas() {
    let { user, loading } = useAuth(); //variable del usuario logeado
    if(loading){
        return <LoadingSpinner />
    }
    if (user){
        let redirectPath = user.rol == "admin" 
        ? "/admin/dashboard" : 
        user.rol == "profesor"
        ? "/admin/asistencias":
        user.rol == "estudiante"
        ? "/admin/estudiante" : "/dashboard"
        return <Navigate to={redirectPath} replace />
    }
    // si noy hay usuario, permitir acceso a las rutas publicas
  return <Outlet />
}
