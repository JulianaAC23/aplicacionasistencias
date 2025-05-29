import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import LoadingSpinner from "../../common/Loading/loadingSpinner";
 
export default function AdminRoutes(){
    let { user, loading } = useAuth(); //variable del usuario logeado
    if (loading){
        return <LoadingSpinner />
    }

    // si no hay usuario, redirige al login
    if(!user){
        return <Navigate to="/login" replace />
    }

    //Usuario autenticado, puede continuar
    return <Outlet />
}