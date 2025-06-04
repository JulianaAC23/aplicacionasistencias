import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import LoadingSpinner from "../../common/Loading/loadingSpinner";
import { useState, useEffect } from "react";
 
export default function AdminRoutes(){
    let { user, loading } = useAuth(); //variable del usuario logeado
    let [spinner, setSpinner] = useState(true);

    useEffect(()=>{
        let time = setTimeout(()=>{
            setSpinner(false);
        }, 1000);
        return ()=> clearTimeout(time);
    },[])
    if (loading || spinner ){
        return <LoadingSpinner />
    }

    // si no hay usuario, redirige al login
    if(!user){
        return <Navigate to="/login" replace />
    }

    //Usuario autenticado, puede continuar
    return <Outlet />
}