import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../../context/AuthProvider";
import LoadingSpinner from "../../common/Loading/loadingSpinner";

export default function RoleRoutes({allowedRoles}) {
     let { user, loading } = useAuth() ; //variable del usuario logeado
    if (loading){
        return <LoadingSpinner />
    }

    // si no hay usuario autenticado, redirige al login
    if (!user){
        return <Navigate to="/login" replace />
    }

    // si el usuario no tiene rol, redirigir a inicio
    if(!allowedRoles.includes(user.rol)){
        return <Navigate to="/" replace />
    }

    //usuario permitido, puede continuar

  return <Outlet />
}
